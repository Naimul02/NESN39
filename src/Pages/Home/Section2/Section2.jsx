import React from 'react';
import './Section2.css'
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Section2 = () => {
  const { isLoading, data: products = [] , refetch } = useQuery({
    queryKey: ["milkproducts"],
    queryFn: async () => {
      const res = await fetch("https://nesn-39-store-server.vercel.app/products")
      const result = await res.json()
      return result

    }
  })
  return (
    <>
      <div className='bg-base-200 pt-3 pb-10 px-4'>
        <div className='flex justify-between gap-3 px-3 flex-wrap mt-4'>
          <div className='flex justify-between items-center gap-3'>
            <img src="https://departmental-store-02.web.app/images/service.png" alt="" />
            <div >
              <h1 className='text-lg font-bold'>Free Shipping</h1>
              <p className=" font-semibold">From all orders over $5</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <img src="https://departmental-store-02.web.app/images/service-02.png" alt="" />
            <div >
              <h1 className='text-lg font-bold'>Daily Surprise Offers</h1>
              <p className=" font-semibold">Save upto 25% off</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <img src="https://departmental-store-02.web.app/images/service-03.png" alt="" />
            <div >
              <h1 className='text-lg font-bold'>Support 24/7</h1>
              <p className=" font-semibold">Shop with an expert</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <img src="https://departmental-store-02.web.app/images/service-04.png" alt="" />
            <div >
              <h1 className='text-lg font-bold'>Affordable Prices</h1>
              <p className=" font-semibold">Get Factory Default Price</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <img src="https://departmental-store-02.web.app/images/service-05.png" alt="" />
            <div >
              <h1 className='text-lg font-bold'>Secure Payments</h1>
              <p className=" font-semibold">100% Protected Payment</p>
            </div>
          </div>
        </div>


        <div className='grid grid-cols-2 lg:grid-cols-4   bg-white shadow39 mt-16 '>
          {
            products?.slice(0 , 8).map(product =>  <Link to={`/detailsProducts/${product?._id}`}><div className='lg:flex block  items-center border-r border-b'>
              <img src={product?.img} alt="" className='py-2 pl-4 w-[130px] h-[131px]' />
              <div className='mx-2 mb-2'>
                <h1 className='text-sm lg:text-base font-semibold'>{product?.title}</h1>
                <p className=" font-semibold">Price : {product?.recentPrice} tk</p>
              </div>
            </div>
            </Link> )
          }
          
          
        </div>
      </div>

    </>
  );
};

export default Section2;