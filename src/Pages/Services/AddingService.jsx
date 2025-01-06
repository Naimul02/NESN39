import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import ServiceCart from './ServiceCart';


const AddingService = ({ grid }) => {
  console.log(grid)
  const [products, setProducts] = useState({})

  const { isLoading, data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch('https://departmental-store-server.vercel.app/addservice');
      const data = res.json()
      return data

    }
  })
  return (
    <>

      <div className={`grid grid-cols-${grid} gap-2`}>
        {
          services?.map(service => <ServiceCart service={service}
            grid={grid}
            setProducts={setProducts}
          ></ServiceCart>)
        }


      </div>
      {/* <BookingModal
        products={products}
      ></BookingModal> */}
    </>
  );
};

export default AddingService;