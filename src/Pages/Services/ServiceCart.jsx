import React from 'react';
import { useState } from 'react';
import Modal from '../Home/MilkProducts/BookingModal/Modal';

const ServiceCart = ({ service, grid, setProducts }) => {
  console.log("grid", grid)
  const { productName, photoURL, price, description } = service;

  const [openModal, setopenModal] = useState(false)

  const open = () => {
    setopenModal(true)
  }

  const close = () => {
    setopenModal(false)
  }
  return (
    <div >
      <div className="card card-product bg-base-100 shadow-xl border-none lg:ml-0 ml-2 ">
        <div className='products-card  relative'>
          <div className='absolute icon'>
            <img className="py-2" src="../../images/wish.svg" alt="" />
            <div className='many-icon'>
              <img className="py-2" src="../../images/prodcompare.svg" alt="" />
              <img className="py-2" src="../../images/view.svg" alt="" />
              <img className="py-2" src="../../images/add-cart.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={grid === 1 ? `flex ` : ""}>
          <figure><img className='card-image w-full img-fluid' src={photoURL} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {productName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className={grid === 1 ? 'w-680' : ""}>{description}</p>
            <div className="card-actions justify-end mt-3">
              <div className="badge badge-outline">Price : {price}</div>

              <label htmlFor="my-modal"
                onClick={() => {
                  setProducts(service)
                  open()
                }}
                className="button">Order Now</label>

              {
                openModal && <Modal
                  close={close}
                  product={service}
                ></Modal>
              }
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ServiceCart;