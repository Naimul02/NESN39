import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cards = ({product}) => {
  const [red , setRed] = useState(false);
  
  return (
    <Link to={`/detailsProducts/${product?._id}`}>
    <div className="rounded  bg-base-100 hover:shadow-lg border-none relative transition-all duration-500 transform hover:scale-105 overflow-hidden  shadow-gray-600 ">


      <div className="absolute bg-base-200  px-3 top-2 left-2 rounded">
        <h1 className="text-sm text-[#5fa800] font-medium">Stock : Available </h1>
      </div>
      
      <div className="w-[176px] h-[176px] object-cover mx-auto">
      <figure><img  src={product?.img} alt="Shoes" className="w-[176px] h-[176px]" /></figure>
      </div>
      
      <div className="px-3 space-y-1 pb-3 flex justify-between items-center">
      <div className=''>
      <h1 className='text-sm font-medium text-gray-600'>{product?.title?.slice(0 , 20)}</h1>
      
      <h1 className='text-lg font-semibold text-gray-800'>${product?.recentPrice}</h1>
      </div>
        
        
      
      </div>
    </div>
    </Link>
  );
};

export default Cards;