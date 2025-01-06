import React from 'react';
import { useState } from 'react';
import Modal from '../Home/MilkProducts/BookingModal/Modal';



const RandomProducts = ({ product }) => {
  const [openModal, setopenModal] = useState(false);

  const open = () => {
    setopenModal(true)
  }
  const close = () => {
    setopenModal(false)
  }



  return (
    // <Carousel responsive={responsive} className="bg-green-300 h-64 ">
    <>


      <div className="card w-80 border-none  bg-orange-200 shadow-xl">
        <figure><img src={product?.image} alt="Shoes" className='w-64 h-52' /></figure>
        <div className="card-body">
          <h2 className="card-title">
            Product Name : {product?.productName}
            <div className="badge badge-secondary h-6 ">NEW</div>
          </h2>
          <div className="card-actions">
            <div className=" badge badge-secondary h-6">Price : {product?.price}</div>
            <label htmlFor="my-modal" onClick={open} className="badge badge-secondary btn btn-active btn-secondary btn-xs">Order Now</label>
            {
              openModal && <Modal
                close={close}
                product={product}
              ></Modal>
            }



          </div>




        </div>
      </div>



    </>


    // </Carousel>
  )
};

export default RandomProducts;