import React from 'react';

const ShowReview = ({ review }) => {
  return (
    <>

      <div >
        <div className="card border-none  bg-base-100 shadow-xl">
          <div className="card-body rounded bg-emerald-400" style={{ height: "230px" }}>
            <div className="flex ">
              <div className="avatar">
                <div className="lg:w-16 w-18 h-16 lg:h-full  rounded-full mr-3">
                  <img src={review?.photourl} alt="" />
                </div>
              </div>

              <div>
                <h2 className="card-title">{review?.name}</h2>
                <p className='lg:text-lg  font-semibold text-left mt-2'>Customer</p>
              </div>

              <div>
                <div className="rating lg:ml-10 ml-6">
                  <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                  <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                  <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                  <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                  <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
                </div>

                <h1 className='lg:text-lg text-base lg:ml-16 ml-4 font-semibold w-full'>Rating : {review?.review} Out Of 5</h1>
              </div>
            </div>

            <h2 className="text-left lg:text-lg text-base font-semibold mt-2">{review?.description}</h2>

          </div>
        </div>

      </div>




    </>


  );
};

export default ShowReview;