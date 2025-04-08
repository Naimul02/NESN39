import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Cards from '../Cards/Cards'

const CakeProducts = () => {
  const { isLoading, refetch, data: products = [] } = useQuery({
    queryKey: ["cakes"],
    queryFn: async () => {
      const res = await fetch("https://nesn-39-store-server.vercel.app/products")
      const data = await res.json();
      
      
      return data

    }
  })
  return (

    <>
        <div className="bg-slate-100 pb-10">
      <div className="max-w-3xl mx-auto text-center space-y-2 mb-8">
      <h1 className="text-xl font-bold">Latest Discounted Products</h1>
      <p className="text-gray-600 px-4 lg:px-0">See Our latest discounted products below. Choose your daily needs from here and get a special discount with free shipping.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-[10px] lg:gap-4 px-[10px] lg:px-6">


        {
          products &&
          products?.slice(18).map(product => <Cards
            
            product={product}
            
          ></Cards>)
        }

      </div>


    </div>
    </>
  );
};

export default CakeProducts;