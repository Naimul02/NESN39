import React, { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider/AuthProvider'
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const MyAccount = () => {
    const {user} = useContext(AuthContext);
    const {data : userImg } = useQuery({
      queryKey : ['user' , user?.email],
      queryFn : async() => {
       const res = await axios.get(`http://localhost:5000/usersImg?email=${user?.email}`)
       
       
    return res.data
      }
   })
  return (
    <div className='bg-white  pt-4 pl-10 pb-10'>
        <h1 className="text-xl mb-2">My Account</h1>

        <div className="card flex items-center gap-3 card-side bg-base-100 rounded-md shadow-xl max-w-[420px] px-2 h-[190px]">
  <figure className='rounded-full'>
    <img
      src={userImg?.photourl}
      alt="User Photo" className='max-w-44 max-h-44 rounded-full pl-3'/>
  </figure>
  <div className="w-full space-y-2">
    <h2 className="font-semibold">Name : {user?.displayName}</h2>
    <p className='font-semibold'> Email : {user?.email}</p>
    <Link to={'/dashboard/updateProfile'}><button className='btn mt-2  px-3 bg-gradient-to-r from-emerald-500  to-emerald-700 text-white btn-sm'><FaRegEdit className="text-xl font-semibold"/>Edit</button></Link>
   
  </div>
</div>
    </div>
  )
}
