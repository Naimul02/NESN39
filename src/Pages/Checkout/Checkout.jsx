import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import {Link} from 'react-router-dom';
import { MdDeleteForever, MdRemoveShoppingCart } from "react-icons/md";
import {toast} from 'react-toastify';
import OurStore from '../Home/OurStore/OurStore'
import Loading from '../Loading/Loading';

const Checkout = () => {

    const { user} = useContext(AuthContext);
    
  
    const { data: carts = [], refetch, isLoading } = useQuery({
      queryKey: ['carts', user?.email],
      queryFn: async () => {
        const res = await axios.get(`http://localhost:5000/carts?email=${user?.email}`);
        console.log(res?.data);
        
        return res.data;
      },
      
    });
   
   if(isLoading){
      return <Loading></Loading>

    }

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
   const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/product?id=${id}`)
    .then(res => {
      console.log(res.data)
      if(res.data.deletedCount > 0){
        toast.success('Product Deleted Successfully')
        refetch()
      }
    })
    .catch(error => {
      console.log(error.message)
    })
  }
    return (
        <div className="bg-slate-100">

<div className="flex lg:flex-row flex-col lg:gap-24 justify-center lg:px-0 px-4  pt-[80px] md:pt-[130px] pb-16">
      <div>
      {carts.length ? (
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold mt-10">
            Billing & Shipping
          </h1>
          <div className="flex  flex-col lg:flex-row items-center md:gap-3">
          <div className="mt-2 w-full">
            <label className="text-lg font-semibold">Your First Name</label>
            <input
              name="firstName"
              className="border border-solid border-red-600 block rounded w-full lg:max-w-[619px]  h-[40px] pl-3  text-base font-medium"
              placeholder="Enter Your First Name"
              required
            />
          </div>
          <div className="mt-2 w-full">
            <label className="text-lg font-semibold">Your Last Name</label>
            <input
              name="lastName"
              className="border border-solid  border-red-600 block rounded lg:max-w-[619px] w-full h-[40px] pl-3  text-base font-medium"
              placeholder="Enter Your Last Name"
              required
            />
          </div>
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">Email</label>
            <input
              name="email"
              className="border border-solid border-red-600 block rounded lg:max-w-[619px] w-full h-[40px] pl-3  text-base font-medium"
              defaultValue={user?.email}
              readOnly
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">Your Phone Number</label>
            <input
              name="phoneNumber"
              className="border border-solid border-red-600 block rounded lg:max-w-[619px] w-full h-[40px] pl-3  text-base font-medium"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">Your Full Address</label>
            <input
              name="address"
              className="border border-solid border-red-600 block rounded lg:max-w-[619px] w-full h-[40px] pl-3  text-base font-medium"
              placeholder="House Number , Street Name And City"
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">
              Country / Region
              <p className="inline text-orange-600 font-semibold text-lg">*</p>
            </label>
            <h3 className="text-xl font-semibold">Bangladesh</h3>
          </div>

          <div>
            <h1 className="text-2xl font-semibold mt-4 mb-3">
              Additional Information
            </h1>
            <label className="text-lg font-semibold block">
              Order Notes(optional)
            </label>
            <textarea
              
              id=""
              className="lg:max-w-[619px] w-full h-[150px] border border-solid border-red-600 rounded pl-2 pt-2  text-base font-medium"
              placeholder="Notes about your order , e.g. special notes for delivery"
              name="orderNotes"
            ></textarea>
          </div>

          <button className="btn bg-green-600 text-white w-full hover:bg-green-700 lg:w-[300px]  mt-2">
            Place Order
          </button>
        </form>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mt-10">Billing & Shipping</h1>
          <div className="flex items-center gap-3">
          <div className="mt-3">
            <label className="text-lg font-semibold">Your First Name</label>
            <input
              name="firstName"
              className="border border-solid border-red-600 block rounded lg:max-w-[619px] w-full h-[40px] pl-3  text-base font-medium"
              placeholder="Enter Your First Name"
              required
            />
          </div>
          <div className="mt-3">
            <label className="text-lg font-semibold">Your Last Name</label>
            <input
              name="lastName"
              className="border border-solid border-red-600 block rounded lg:max-w-[619px] w-full h-[40px] pl-3  text-base font-medium"
              placeholder="Enter Your Last Name"
              required
            />
          </div>
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">Email</label>
            <input
              name="email"
              className="border border-solid border-red-600 block rounded lg:max-w-[619px] w-full h-[40px] pl-3  text-base font-medium"
              defaultValue={user?.email}
              readOnly
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">Your Phone Number</label>
            <input
              name="phoneNumber"
              className="border border-solid border-red-600 block rounded lg:max-w-[619px] w-full h-[40px] pl-3  text-base font-medium"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">Your Full Address</label>
            <input
              name="address"
              className="border border-solid border-red-600 block rounded lg:max-w-[619px] w-full h-[40px] pl-3  text-base font-medium"
              placeholder="House Number , Street Name And City"
              required
            />
          </div>
          <div className="mt-2">
            <label className="text-lg font-semibold">
              Country / Region
              <p className="inline text-orange-600 font-semibold text-lg">*</p>
            </label>
            <h3 className="text-xl font-semibold">Bangladesh</h3>
          </div>

          <div className="mt-4">
            <h1 className="text-2xl font-semibold mt-5 mb-3">
              Additional Information
            </h1>
            <label className="text-lg font-semibold block">
              Order Notes(optional)
            </label>
            <textarea
              className="lg:max-w-[619px] w-full h-[150px] border border-solid border-red-600 rounded pl-2 pt-2  text-base font-medium"
              placeholder="Notes about your order , e.g. special notes for delivery"
              name="orderNotes"
            ></textarea>
          </div>

          <button
            className="btn bg-green-600 text-white w-full hover:bg-green-700 lg:w-[300px] mt-2"
            disabled
          >
            Place Order
          </button>
        </div>
      )}
      </div>

      <div className="mt-10">
        
        <div className="sticky top-36">
        <h1 className="text-2xl text-green-600 font-semibold mb-3">
          Order Summery
        </h1>
          {carts?.length  > 0 ? (
            <div  className="bg-white border rounded-lg p-4 ">

            <div className="overflow-y-auto  max-h-[300px]">
              {
                      
                        carts?.map(cart => <div className="block hover:bg-base-200 px-3  py-3 border-b w-full" >
                            <div className="flex justify-between w-full items-center">
                          
                                <Link to={`/detailsProducts/${cart?.id}`} className="flex items-center gap-2">
                               
                                <div className="w-16 h-16">
                              <img src={cart?.img} alt="" className='w-16 h-16 rounded-full'/>
                            </div>
                            <div className="pr-16">
                              <h2 className="text-sm font-bold">{cart?.title}</h2>
                              <p className="text-gray-500">Item Price : {cart?.recentPrice}</p>
                              <p className="text-sm font-semibold text-gray-500">Total Price : {cart.recentPrice} * {cart?.quantity} = ৳ {cart.recentPrice * cart?.quantity}</p>
                            </div>
                               
                                </Link>
                            <div className="hover:bg-white hover:cursor-pointer rounded-full p-1"onClick={() => handleDelete(cart?._id)}>
                            <MdDeleteForever className="text-red-600 text-3xl"/>
                            </div>
                            </div>
                            </div>
                          )
                       
                    }
            </div>

              {
            carts?.length > 0 && <div className=" px-3 py-1 flex justify-between p-2 text-xl   font-bold">
            Total Price :   <span>৳{carts?.reduce((sum , cart) => sum + (cart?.recentPrice * cart?.quantity) , 0)}</span>
          </div>
          }
            </div>

          ) : (
            <div className="bg-white border rounded-lg mt-1 py-8">
              <MdRemoveShoppingCart  className="text-7xl text-green-600  mx-[40%]"/>

              <h2 className="text-lg my-2  font-semibold text-green-600 text-center">
                There are no products here , <br /> please add products to the cart
              </h2>
              <Link to="/">
                <button className="btn bg-green-600 lg:mx-[104px] text-center mt-3 text-white lg:w-[300px] w-full hover:bg-emerald-700 mb-[4%]">
                  Back to shopping
                </button>
              </Link>
            </div>
          )}
          
          
        </div>
      </div>
    </div> 

          <OurStore></OurStore>
        </div>
    
    );
};

export default Checkout;