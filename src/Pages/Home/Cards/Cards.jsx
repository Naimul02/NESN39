import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cards = ({product}) => {

  return (
    <Link to={`/detailsProducts/${product?._id}`}>
    <div className="rounded  bg-base-100 hover:shadow-lg border-none relative transition-all duration-500 transform hover:scale-105 overflow-hidden  shadow-gray-600 ">

    <div className='absolute top-1 right-3'>
          <img className="py-2" src="https://departmental-store-02.web.app/images/wish.svg" alt="" />
          <div className='many-icon'>
            <img className="py-2" src="../../images/prodcompare.svg" alt="" />
            <img className="py-2" src="../../images/view.svg" alt="" />
            <img className="py-2" src="../../images/add-cart.svg" alt="" />
          </div>
        </div>
      <div className="absolute bg-base-200  px-3 top-2 left-2 rounded">
        <h1 className="text-sm text-[#5fa800] font-medium">Stock : Available </h1>
      </div>
      
      <div className="w-[176px] h-[176px] object-cover mx-auto">
      <figure><img  src={product?.img} alt="Shoes" className="w-[176px] h-[176px]" /></figure>
      </div>
      
      <div className="px-3 space-y-1 pb-3 flex justify-between items-center">
      <div>
      <h1 className='text-sm font-medium text-gray-600'>{product?.title.slice(0 , 22)}</h1>
      <h1 className='text-sm font-medium text-gray-600'>{product?.category}</h1>
      <h1 className='text-lg font-semibold text-gray-800'>${product?.recentPrice}</h1>
      </div>
        
        <div className='border rounded-md hover:text-white  hover:bg-[#5fa800] w-[36px] h-[36px] flex justify-center items-center text-[#5fa800]'>
        <FaShoppingCart className='text-lg font-semibold '/>
        </div>
      
      </div>
    </div>
    </Link>
  );
};

export default Cards;