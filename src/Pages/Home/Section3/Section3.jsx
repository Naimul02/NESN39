import React from 'react';
import { Link } from 'react-router-dom';

const Section3 = () => {

  return (
    <div className='py-3'>
      <h2>I Could not do this</h2>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://www.cadbury.co.nz/media/catalog/product/m/o/mond-9300617003328-1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=519&width=712&canvas=712:519" className='w-44' alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link to="#slide4" className="btn btn-circle">❮</Link>
            <Link to="#slide2" className="btn btn-circle">❯</Link>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://5.imimg.com/data5/SELLER/Default/2021/2/ON/ZG/SM/14923151/kitkat41-5gm-1024x1024-2x-250x250.jpg" className='w-44' alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link to="#slide1" className="btn btn-circle">❮</Link>
            <Link to="#slide3" className="btn btn-circle">❯</Link>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://candybarsydney.com.au/web/image/product.template/49772/image_256/Darrell%20Lea%20Dark%20Chocolate%20Bullets%20250g?unique=10b63f1" className='w-44' alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link to="#slide2" className="btn btn-circle">❮</Link>
            <Link to="#slide4" className="btn btn-circle">❯</Link>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://candybarsydney.com.au/web/image/product.template/47995/image_256/Giant%20Hershey%27s%20Chocolate%20Bar%20198g?unique=10b63f1 " className='w-44' alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link to="#slide3" className="btn btn-circle">❮</Link>
            <Link to="#slide1" className="btn btn-circle">❯</Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Section3;