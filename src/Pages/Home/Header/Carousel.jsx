import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export const Carousel = () => {
  return (
  


    <>
     <div>
     <Swiper pagination={true} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Pagination , Autoplay]} className="mySwiper w-full max-h-[405px] rounded-lg">
         <SwiperSlide><img className='rounded-lg' src="https://i.pinimg.com/originals/76/c5/56/76c55615e10bcc1ea196ace17e4c2c14.jpg" alt="" /></SwiperSlide>
         <SwiperSlide><img className='rounded-lg' src="https://img.pikbest.com/origin/06/43/52/233pIkbEsTKCp.jpg!w700wp" alt="" /></SwiperSlide>
         <SwiperSlide><img className='rounded-lg' src="https://img.pikbest.com/origin/08/99/01/352pIkbEsTY7s.jpg!w700wp" alt="" /></SwiperSlide>
       
        <SwiperSlide><img className='rounded-lg' src="https://img.pikbest.com/origin/05/76/00/68FpIkbEsT2xf.jpg!w700wp" alt="" /></SwiperSlide>
        <SwiperSlide><img className='rounded-lg' src="https://img.pikbest.com/origin/06/08/37/pIkbEsT6apIkbEsTePb.jpg!bw700" alt="" /></SwiperSlide>
       
        <SwiperSlide><img className='rounded-lg' src="https://img.pikbest.com/origin/06/12/43/05bpIkbEsTmwN.jpg!w700wp" alt="" /></SwiperSlide>
       
        
      </Swiper>
     </div>
    </>
 


  )
}
