import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import Loading from '../../Loading/Loading';


import MilkProducts from './MilkProducts';

const MilkProductsInfo = () => {
  
  const [products, setProducts] = useState({});



  const { isLoading, data: milkProducts = [] } = useQuery({
    queryKey: ["milkproducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/milkproducts")
      const data = await res.json()
      console.log("data" , data)
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
      <p className="text-gray-600">See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping.</p>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 mx-4">


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