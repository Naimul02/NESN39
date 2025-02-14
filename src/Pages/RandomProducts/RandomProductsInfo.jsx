import React from 'react';
import { useQuery } from '@tanstack/react-query';
import RandomProducts from './RandomProducts';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Loading from '../Loading/Loading';
const RandomProductsInfo = () => {



 
  

  return (
    <div className='bg-slate-100'>
          <div className="bg-[#5fa800] p-6  md:p-12 mx-[10px] lg:mx-6 rounded-lg" >
      
      <div className="flex  flex-col lg:flex-row gap-1 lg:gap-8 bg-white  items-center rounded-lg">

      <div className="w-full lg:w-[45%] ">
            <img src="https://cdn.dribbble.com/users/1197989/screenshots/5585685/delivery-boy.gif" className="w-full  lg:h-[315px]  object-cover rounded-lg" alt="" />
          </div>
          <div className="w-full lg:w-[55%] p-3 lg:pr-6">
                <h2 className="text-lg font-semibold text-gray-600">Organic Products and Food</h2>
                <h1 className="text-xl font-bold">Quick Delivery to Your Home</h1>
                <p className="text-gray-700 mt-3 text-justify">There are many products you will find in our shop, Choose your daily necessary product from our KachaBazar shop and get some special offers. See Our latest discounted products from here and get a special discount.</p>
          </div>

          
      </div>



    </div>
    </div>
  )
};

export default RandomProductsInfo;