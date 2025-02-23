import React from 'react';
import { Carousel } from './Carousel';


const Header = () => {
  return (
    <>
    <div>

    <div className="px-[10px] lg:px-6  pt-[60px] lg:pt-[130px] bg-white">
      <div className='my-3  grid grid-cols-1 lg:grid-cols-2 lg:h-[405px] gap-3'>
       
        <Carousel></Carousel>
        <div className='grid lg:grid-cols-2 grid-cols-1  gap-3 '>
          <div className=''>
            <img src="https://img1.10bestmedia.com/Images/Photos/406808/The-Fresh-Market_55_660x440.jpg" className='rounded-lg h-full' alt="" />
            
          </div>
          <div className="">
            <img src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2018/05/09131032/090518lemarch.jpg
" alt="" className='rounded-3 h-full' />
           
          </div>
          <div className="hidden lg:block">
            <img src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/saving-money-on-groceries-phpf0594m" alt="" className='rounded-3 h-full' />
            
          </div>
          <div className="hidden lg:block">
            <img src="https://www.foodandwine.com/thmb/Xl9Rxl5Aq8wWQSO-1g1_W05YDjY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Whats-Really-Going-on-With-Food-Prices-FT-BLOG0324-02-b2a25858f5b54e4190a0bdd96e2e0974.jpg" alt="" className='rounded-3  h-full' />
            
          </div>

        </div>

      </div >
    </div>
    </div>
    </>
  );
};

export default Header;