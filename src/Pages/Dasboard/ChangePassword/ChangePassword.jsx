import React, { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider/AuthProvider'
import { RxUpdate } from 'react-icons/rx'
import axios from 'axios'
import { toast } from 'react-toastify'

export const ChangePassword = () => {
    const {user} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const currentPassword = form.currentPassword.value;
        const newPassword = form.password.value;
        
        
  
        const info = {
           email,
           currentPassword,
           password : newPassword

        }
        console.log(info)
        
        axios.put('http://localhost:5000/changePassword' , info)
        .then(res => {
          console.log(res.data)
          if(res.data?.modifiedCount > 0){
            toast.success("Your password has been successfully changed !")
          }
          else{
            toast.error(res.data?.message)
          }
        })
        
    }
  return (
<div className='bg-white  lg:mx-16 lg:my-10 border rounded-md'>

    <form onSubmit={handleSubmit} className="p-4">
          <h1 className="text-2xl font-bold ">
            Change Password
          </h1>
         
          <div className="mt-3 w-full">
            <label className="text-lg font-semibold">Email</label>
            <input
              name="email"
              className="border mt-1 border-solid border-red-600 block rounded  w-full h-[40px] pl-3  text-base font-medium"
              defaultValue={user?.email}
              readOnly
              
              required
            />
          </div>
          
          <div className="mt-3 w-full">
            <label className="text-lg font-semibold">Current Password</label>
            <input
              name="currentPassword"
              className="border mt-1 border-solid border-red-600 block rounded w-full   h-[40px] pl-3  text-base font-medium"
              placeholder="Current Password"
              type='password'
              required
            />
          </div>
          <div className="mt-3 w-full">
            <label className="text-lg font-semibold">New Password</label>
            <input
            type='password'
              name="password"
              className="border mt-1 border-solid  border-red-600 block rounded  w-full h-[40px] pl-3  text-base font-medium"
              placeholder="New Password"
              required
            />
          </div>
          

          

         
         
          
          

          <button className='btn btn-md bg-gradient-to-r px-5 from-emerald-500 mt-3 to-emerald-700 text-white'><RxUpdate className="text-xl font-semibold"/>Change Password</button>
        </form>

    </div>
  )
}
