import React, { useState } from 'react';
import Modal from '../MilkProducts/BookingModal/Modal';

const DiscountProducts = ({ cake }) => {
  const [openModal, setopenModal] = useState(false);

  const open = () => {
    setopenModal(true)
  }

  const close = () => {
    setopenModal(false)
  }
  return (
    <>

      <div className='container p-0 relative contain  '>
        <img src={cake?.image} className='rounded-3' alt="" />
        <div className='absolute des text-white '>
          <div className="pl-8">
            <h2 className='text-xl font-bold '> <span className='text-sky-500'>{cake?.productName}</span></h2>
            <p className="text-lg text font-semibold">PRICE : {cake?.price}</p>
            <label className="badge badge-secondary btn btn-active btn-secondary btn-xs" onClick={open}>Order Now</label>

            {
              openModal && <Modal
                product={cake}
                close={close}

              ></Modal>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountProducts;