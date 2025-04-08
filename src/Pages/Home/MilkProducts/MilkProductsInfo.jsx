import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import Loading from '../../Loading/Loading';


import MilkProducts from './MilkProducts';

const MilkProductsInfo = () => {
  
  const [products, setProducts] = useState({});



  const { isLoading, data: milkProducts = [] , refetch } = useQuery({
    queryKey: ["milkproducts"],
    queryFn: async () => {
      const res = await fetch("https://nesn-39-store-server.vercel.app/products")
      const result = await res.json()
      
      return data

    }
  })
  
  if (isLoading) {
    return <Loading></Loading>
  }

  
  return (
    <div className="bg-slate-100 pb-10">
      <div className="max-w-3xl mx-auto text-center space-y-2 pt-10 mb-10">
      <h1 className="text-xl font-bold">Products for Daily Shopping</h1>
      <p className="text-gray-600 px-4 lg:px-0">See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping.</p>
      </div>

      <div className="pl-2 pr-2 lg:pl-6 lg:pr-6 grid grid-cols-2 lg:grid-cols-5 gap-[10px] lg:gap-4">


        {
          milkProducts &&
          milkProducts?.slice(8 , 18).map(milkProduct => <MilkProducts
            key={milkProduct._id}
            product={milkProduct}
            setProducts={setProducts}
            refetch={refetch}
          ></MilkProducts>)
        }

      </div>


    </div>
  );
};

export default MilkProductsInfo;