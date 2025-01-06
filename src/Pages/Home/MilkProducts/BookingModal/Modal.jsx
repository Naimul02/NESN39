import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const Modal = (props) => {

  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();


  const handleSubmitInfo = (data) => {
    console.log(data)

    fetch('https://departmental-store-server.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('order successfull !')
      })

  }

  return (
    <div className='overlays'>

      <form onSubmit={handleSubmit(handleSubmitInfo)} className='form lg:w-1/3 w-full'>
        <div className='flex justify-between items-center h-0 pt-8 pl-5'>
          <h1 className='text-lg font-semibold text-black '>Product Name : {props?.product.productName}</h1>
          <button className='close_button' onClick={props.close}>&times;</button>
        </div>

        <div className='mt-6 mx-3'>
          <input {...register('name')} type="text" value={user?.displayName} className="input  bg-base-200 w-full mb-2 text-black" readOnly />
          <input type="text" {...register('email')} className="input  bg-base-200 w-full mb-2 text-black" value={user?.email} readOnly />
          <input type="text"{...register('productName')} className="input  bg-base-200 w-full mb-2 text-black" value={props.product.productName} readOnly />
          <input type="text"{...register('unitprice')} className="input  bg-base-200 w-full mb-2 text-black" value={`unit price : ${props.product.price}`} readOnly />
          <input type="text"{...register('quantity')} className="input input-bordered w-full text-black" placeholder='quantity' />
          <input type="text"{...register('phone')} className="input input-bordered w-full mt-2 text-black" placeholder='Please enter your phone number' />

          <input type="submit" value="Submit" className='btn btn-active btn-secondary mt-2 w-full' />
        </div>





      </form>

    </div>
  );
};

export default Modal;