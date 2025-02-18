import React, { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider/AuthProvider'
import { RxUpdate } from 'react-icons/rx'

export const UpdateProfile = () => {
    const {user} = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const address = form.address.value;
        const orderNotes = form.orderNotes.value;
  
        const info = {
           firstName ,
           lastName,
           email,
           phoneNumber, 
           address,
           orderNotes,
           orders : carts,
           productId : carts?.map(cart => cart?._id)
        }
        
        axios.post('http://localhost:5000/orderConfirm' , info)
        .then(res => {
          console.log(res.data)
          if(res.data?.insertedId){
            toast.success("Your Order has been successful")
          }
        })
        .catch(error => {
          console.error(error.message)
        })
    }
  return (
    <div className='bg-white  lg:mx-16 lg:my-10 border rounded-md'>

    <form onSubmit={handleSubmit} className="p-4">
          <h1 className="text-2xl font-bold ">
            Update Profile
          </h1>
          <div className='borde-2 border-dotted'>
            Photo
          </div>
          <div className="flex  flex-col lg:flex-row items-center md:gap-3">
          <div className="mt-3 w-full">
            <label className="text-lg font-semibold">Your Full Name</label>
            <input
              name="displayName"
              className="border border-solid border-red-600 block rounded w-full lg:max-w-[619px]  h-[40px] pl-3  text-base font-medium"
              placeholder="Enter Your First Name"
              defaultValue={user?.displayName}
              required
            />
          </div>
          <div className="mt-3 w-full">
            <label className="text-lg font-semibold">Address</label>
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
            <label className="text-lg font-semibold">Email</label>
            <input
              name="email"
              className="border border-solid border-red-600 block rounded lg:max-w-[619px] w-full h-[40px] pl-3  text-base font-medium"
              defaultValue={user?.email}
              
              required
            />
          </div>
          <div className="mt-3 w-full">
            <label className="text-lg font-semibold">Your Phone Number</label>
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
