import React from 'react';


const Header = () => {
  return (
    <>
    <div className="px-3 lg:px-6 h-[400px] pt-[85px] lg:pt-[130px] bg-white">
      <div className='my-3  grid grid-cols-1 lg:grid-cols-2 gap-4 '>
        <div className='relative h-[250px] lg:h-full'>
          <img src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F7c585aa4-e22b-11ea-9a3a-c45f6db42dc9.jpg?crop=4762%2C3175%2C119%2C79" className='rounded-3 h-full w-full' alt="" />

          
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 h-full  gap-2 '>
          <div className=' p-0 relative'>
            <img src="https://www.shutterstock.com/image-photo/honey-jar-honeycomb-on-black-260nw-1173412054.jpg" className='rounded-3 h-full' alt="" />
            
          </div>
          <div className=" p-0 relative">
            <img src="https://www.shutterstock.com/image-photo/honey-bee-honeycomb-dipper-dry-260nw-1356483455.jpg
" alt="" className='rounded-3 h-full' />
           
          </div>
          <div className=" p-0 relative">
            <img src="https://img.freepik.com/premium-photo/honey-drips-from-spoon-into-jar-black-background_222185-1240.jpg" alt="" className='rounded-3 h-full' />
            
          </div>
          <div className=" p-0 relative">
            <img src="https://img.freepik.com/premium-photo/honeycombs-jar-with-honey-dipper_185193-17672.jpg" alt="" className='rounded-3  h-full' />
            
          </div>

        </div>

      </div >
    </div>
    </>
  );
};

export default Header;