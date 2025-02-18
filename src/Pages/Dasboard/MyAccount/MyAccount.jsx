import React, { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider/AuthProvider'
import { FaRegEdit } from 'react-icons/fa';

export const MyAccount = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
  return (
    <div className='bg-white  pt-4 pl-10 pb-10'>
        <h1 className="text-xl mb-2">My Account</h1>

        <div className="card flex items-center gap-3 card-side bg-base-100 rounded-md shadow-xl max-w-[390px] h-[200px]">
  <figure>
    <img
      src={user?.photoURL}
      alt="User Photo" className='max-w-44 max-h-44 rounded-full pl-3'/>
  </figure>
  <div className="w-full space-y-2">
    <h2 className="font-semibold">Name : {user?.displayName}</h2>
    <p className='font-semibold'> Email : {user?.email}</p>
    <button className='btn  bg-gradient-to-r from-emerald-500  to-emerald-700 text-white btn-sm'><FaRegEdit className="text-xl font-semibold"/>Edit</button>
   
  </div>
</div>
    </div>
  )
}
