import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ShowReview from './ShowReview';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';
import Loading from '../Loading/Loading';

const YourReview = () => {


  const { isLoading, data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch('https://departmental-store-server.vercel.app/review')
      const data = res.json()
      return data
    }
  })
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <>
      <div className='lg:hidden block bg-base-200'>
        <h1 className='text-xl font-bold text-center py-2'>Our Customer Review</h1>
      </div>
      <div className="flex lg:bg-base-200 bg-white mx-3 rounded mb-2 "  >

        <div className='bg-base-200  rounded mt-3 mr-3 mb-3 ml-1  lg:w-1/4 lg:block hidden ' style={{ height: '230px', }} >
          <h1 className="text-xl ml-2 lg:block hidden font-semibold mt-3">Our Customer Review</h1>
        </div>

        <Carousel className=' mt-3 rounded  mr-3  lg:w-2/4 w-full'>

          {
            reviews?.map(review => <ShowReview
              key={review._id}
              review={review}
              setReview={review}
            ></ShowReview>)
          }

        </Carousel>
        <div className="my-3 rounded lg:w-1/4 lg:block hidden ">
          <img className='rounded w-full' style={{ height: '230px' }} src="https://w0.peakpx.com/wallpaper/617/154/HD-wallpaper-la-ilahe-illallah-muslim-allah-sword-flag.jpg" alt="" />
        </div>
      </div>
    </>




  );
};

export default YourReview;