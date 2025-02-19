import React, { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider/AuthProvider'
import { RxUpdate } from 'react-icons/rx'

import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { toast } from 'react-toastify';

export const UpdateProfile = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const imgBB_API_KEY = 'a115c1fc301ae82139c471c0406d9a62';
    const image_hosting = `https://api.imgbb.com/1/upload?key=${imgBB_API_KEY}`


    const handleSubmit = async(e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.displayName.value;
        
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const address = form.address.value;
        const imageFile = form.image.files[0]
        
        const formData = new FormData();
        formData.append("image", imageFile);

        const res = await axiosPublic.post( image_hosting , formData , {
          headers : {
            'content-type' : 'multipart/form-data'
          }
        })
        
        const info = {
          name,
          email,
           phoneNumber, 
           address,
           photoURL : res?.data?.data?.url
        }
        
      axiosPublic.put(`/users/${user?.email}` , info)
      .then(res => {
        console.log(res.data)
        if(res.data.modifiedCount > 0){
          toast.success('Your Profile updated successful!')
        }
      })
      .catch(error => {
        console.error(error.message)
      })
    }
  return (
    <div className='bg-white  lg:mx-16 lg:my-10 border rounded-md'>

    <form onSubmit={handleSubmit} className="p-4">
          <h1 className="text-2xl font-bold">
            Update Profile
          </h1>
            
          
          <div className="mt-3 w-full">
            <label className="text-lg font-semibold block mb-1">Photo</label>
            <input type="file" className="file-input file-input-bordered h-[70px] lg:h-[180px] md:p-8  p-3  w-full hover:cursor-pointer"name="image"required />
          </div>

          <div className="flex  flex-col lg:flex-row items-center md:gap-3">
          <div className="mt-3 w-full">
            <label className="text-lg font-semibold mb-1">Your Full Name</label>
            <input
              name="displayName"
              className="border border-solid border-red-600 block rounded w-full lg:max-w-[619px]  h-[40px] pl-3  text-base font-medium"
              placeholder="Enter Your First Name"
              defaultValue={user?.displayName}
              required
            />
          </div>
          <div className="mt-3 w-full">
            <label className="text-lg font-semibold mb-1">Address</label>
            <input
              name="address"
              className="border border-solid  border-red-600 block rounded lg:max-w-[619px] w-full h-[40px] pl-3  text-base font-medium"
              placeholder="Address"
              required
            />
          </div>
          </div>

          <div className='flex flex-col lg:flex-row items-center md:gap-3'>

          <div className="mt-3 w-full">
            <label className="text-lg font-semibold mb-1">Email</label>
            <input
              name="email"
              className="border border-solid border-red-600 block rounded lg:max-w-[619px] w-full h-[40px] pl-3  text-base font-medium"
              defaultValue={user?.email}
              
              required
            />
          </div>
          <div className="mt-3 w-full">
            <label className="text-lg font-semibold mb-1">Your Phone Number</label>
            <input
              name="phoneNumber"
              className="border border-solid border-red-600 block rounded lg:max-w-[619px] w-full h-[40px] pl-3  text-base font-medium"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          </div>
          

          <button className='btn btn-md bg-gradient-to-r px-5 from-emerald-500 mt-3 to-emerald-700 text-white'><RxUpdate className="text-xl font-semibold"/>Update</button>
        </form>

    </div>

  )
}
