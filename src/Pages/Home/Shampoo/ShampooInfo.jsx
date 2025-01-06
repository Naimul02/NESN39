import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loading/Loading';
import Shampoo from './Shampoo';

const ShampooInfo = () => {
  const { isLoading, data: shampoos = [] } = useQuery({
    queryKey: ["shapoos"],
    queryFn: async () => {
      const res = await fetch("https://departmental-store-server.vercel.app/shampoo")
      const data = await res.json()
      return data

    }
  })
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className='grid lg:grid-cols-4 grid-cols-1 mx-3 gap-2'>
      {
        shampoos?.map(shampoo => <Shampoo
          key={shampoo._id}
          shampoo={shampoo}
        ></Shampoo>)
      }

    </div>
  );
};

export default ShampooInfo;