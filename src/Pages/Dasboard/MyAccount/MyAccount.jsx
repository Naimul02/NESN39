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
       const res = await axios.get(`https://nesn-39-store-server.vercel.app/usersImg?email=${user?.email}`)
       
       
    return res.data
      }
   })
  return (
    <div className='bg-white px-3 lg:px-10 pt-8  pb-10'>
        <h1 className="text-xl mb-2">My Account</h1>

        <div className="card flex flex-col lg:flex-row items-center gap-3 card-side bg-base-100 rounded-md shadow-xl max-w-[480px] px-4 lg:px-2 lg:h-[190px] py-4 lg:py-0">
        <div className="avatar pl-3 pr-2">
  <div className="ring-primary ring-offset-base-100 w-28 lg:w-32 rounded-full ring ring-offset-2">
  <img
      src={userImg?.photourl}
      alt="User Photo"/>
  </div>
</div>
  
  <div className="w-full space-y-2 pr-1">
    <h2 className="font-semibold">Name : {user?.displayName}</h2>
    <p className='font-semibold'> Email : {user?.email}</p>
    <Link to={'/dashboard/updateProfile'}><button className='btn mt-2  px-3 bg-gradient-to-r from-emerald-500  to-emerald-700 text-white btn-sm'><FaRegEdit className="text-xl font-semibold"/>Edit</button></Link>
   
  </div>
</div>
    </div>
  )
}
