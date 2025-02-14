import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import Loading from '../../Loading/Loading';


import MilkProducts from './MilkProducts';

const MilkProductsInfo = () => {
  
  const [products, setProducts] = useState({});



  const { isLoading, data: milkProducts = [] } = useQuery({
    queryKey: ["milkproducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products")
      const result = await res.json()
      const data = result?.slice(0 , 10)
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

      <div className="mx-2 lg:mx-4 grid grid-cols-2 lg:grid-cols-5 gap-[10px] lg:gap-4">


        {
          milkProducts &&
          milkProducts?.map(milkProduct => <MilkProducts
            key={milkProduct._id}
            product={milkProduct}
            setProducts={setProducts}
          ></MilkProducts>)
        }

      </div>


    </div>
  );
};

export default MilkProductsInfo;