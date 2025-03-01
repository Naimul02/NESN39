import React, { useContext, useState } from 'react';
import Modal from './BookingModal/Modal';
import { FaShoppingCart } from 'react-icons/fa';
import './MilkProducts.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';


const MilkProducts = ({ product  }) => {
  const { img, title,  recentPrice } = product;


  

  



 



  return (

    <>
      {/* The button to open modal */}


      {/* Put this part before </body> tag */}

<div>
     <div  className="h-[260px] rounded  bg-base-100 hover:shadow-lg border-none relative transition-all duration-500 transform hover:scale-105 overflow-hidden  shadow-gray-600 " >
     <Link to={`/detailsProducts/${product?._id}`}>


  <div className="absolute bg-base-200  px-3 top-2 left-2 rounded">
    <h1 className="text-sm text-[#5fa800] font-medium">Stock : Available </h1>
  </div>
  
  <div className="w-[176px] h-[176px] object-cover mx-auto">
  <figure><img  src={img} alt="Shoes" className="w-[176px] h-[176px]" /></figure>
  </div>
  
  
</Link>
     <div className="px-3 space-y-1 pb-3 flex justify-between items-center">
  <div>
  <h1 className='text-sm  font-medium text-gray-600'>{title.slice(0 , 22)}</h1>
  {/* <h1 className='text-sm  font-medium text-gray-600'>{category}</h1> */}
  <h1 className='text-lg font-semibold text-gray-800'>${recentPrice}</h1>
  </div>
    
 
  
  </div>
     </div>

</div>

    </>








  );
};

export default MilkProducts;