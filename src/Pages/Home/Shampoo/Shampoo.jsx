import React, { useState } from 'react';
import Modal from '../MilkProducts/BookingModal/Modal';

const Shampoo = ({ shampoo }) => {
  const { image, productName, price } = shampoo;

  const [openModal, setopenModal] = useState(false);

  const open = () => {
    setopenModal(true)
  }

  const close = () => {
    setopenModal(false)
  }
  return (
    <>

      <div className='shampoo rounded-4 p-3 mb-3'>
        <div className='card-image'>
          <img src={image} alt="img" className='rounded-4' />
        </div>
        <div className='detail'>
          <h1 className='text-xl font-semibold mb-1'>{productName}</h1>
          <h2 className='text-lg font-semibold'>Price : {price} tk</h2>
          <button onClick={open} className='btn mb-4  bg-white text-black addtocard w-full'>Order Now</button>

          {openModal && <Modal
            close={close}
            product={shampoo}
          ></Modal>}
        </div>
      </div>

    </>
  );
};

export default Shampoo;