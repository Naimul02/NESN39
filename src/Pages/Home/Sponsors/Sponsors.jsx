import React from 'react';
import Marquee from 'react-fast-marquee';

const Sponsors = () => {
  return (
      <div className="bg-slate-100 py-5 lg:py-16">
         <div className='mx-[10px] lg:mx-6  bg-white shadow-md shadow-black'>
      <Marquee className='flex  justify-between items-center brand'>
        <img className='px-4' src="https://departmental-store-02.web.app/images/brand-01.png" alt="" />
        <img className='px-4 ' src="https://departmental-store-02.web.app/images/brand-02.png" alt="" />
        <img className='px-4 ' src="https://departmental-store-02.web.app/images/brand-03.png" alt="" />
        <img className='px-4 ' src="https://departmental-store-02.web.app/images/brand-05.png" alt="" />
        <img className='px-4  object-fit-cover' src="https://departmental-store-02.web.app/images/brand-06.png" alt="" />
        <img className='px-4  object-fit-cover' src="https://departmental-store-02.web.app/images/brand-07.png" alt="" />
        <img className='px-4  object-fit-cover' src="https://departmental-store-02.web.app/images/brand-08.png" alt="" />
        <img className='px-4  object-fit-cover' src="https://departmental-store-02.web.app/images/brand-05.png" alt="" />
      </Marquee>

    </div>
      </div>
  );
};

export default Sponsors;