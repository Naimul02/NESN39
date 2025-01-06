import React, { useState } from 'react';
import AddingService from './AddingService';

const Services = () => {
  const [grid, setGrid] = useState(4);





  return (
    <>
      <div className='bg-base-200'>
        <div className='py-3 bg-white'>
          <p className='text-lg font-semibold text-center'>Home / Our Services</p>
        </div>


        <div className="flex mt-10 mr-0 mb-[-40px]">
          <div style={{ width: '330px' }} className="mr-6 lg:block hidden">
            <div className='bg-white p-3 rounded ml-2'>
              <p className="text-lg font-semibold pb-2">Shop By Categories</p>
              <p className='text-slate-500 font-semibold'>Watch</p>
              <p className='text-slate-500 font-semibold'>Laptop</p>
              <p className='text-slate-500 font-semibold'>Book</p>
              <p className='text-slate-500 font-semibold'>Samsung</p>


            </div>
          </div>
          <div className="mb-2 w-full">
            <div className='lg:bg-white flex  justify-between py-2 rounded mr-3  '>
              <div className='lg:block hidden'>
                <div className='flex'>
                  <p className='w-64 pl-2 mt-2 text-lg font-semibold'>Sort By</p>
                  <select className="select select-bordered w-full max-w-xs">
                    <option selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
              </div>
              <div className='lg:block hidden'>

                <div className='flex'>
                  <p className='text-lg font-semibold mt-2'>21 Products</p>
                  <div className='flex ml-5 mr-5'>
                    <img className='w-11 line rounded mr-2 bg-base-200 p-2' src="../../images/gr4.svg" onClick={() => setGrid(4)} alt="" />
                    <img className='w-9 line mr-2 rounded bg-base-200 p-2' src="../../images/gr3.svg " onClick={() => setGrid(3)} alt="" />
                    <img className="w-7 mr-2 line rounded bg-base-200 p-2" onClick={() => setGrid(2)} src="../../images/gr2.svg" alt="" />
                    <img className="w-10 line  bg-base-200 p-2 rounded" src="../../images/gr.svg" onClick={() => setGrid(1)} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-3  mr-2'>
              <AddingService
                grid={grid}
              ></AddingService>
            </div>



          </div>
        </div>

      </div>




    </>
  );
};

export default Services;