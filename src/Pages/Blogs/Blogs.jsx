import React from 'react'
import OurStore from '../Home/OurStore/OurStore'

export const Blogs = () => {
  return (
    <div className='lg:pt-[9%] pt-[15%]'>
        <div className="bg-[url('https://res.cloudinary.com/ahossain/image/upload/v1697439245/settings/yw3cd2xupqwqpqcbxv9l.jpg')] h-[100px] lg:h-[200px] bg-cover bg-no-repeat bg-center">
                <div className='flex justify-center items-center h-full'>
                    <h1 className="text-2xl lg:text-3xl font-bold">Blogs</h1>
                </div>
        </div>


        <div className='flex flex-col lg:flex-row justify-center  gap-4  mx-[5%] mt-10'>
            <div className='w-full lg:w-[50%]'>
            <h1 className="text-2xl font-bold mb-2">Welcome to our NESN39</h1>
           <p className='leading-7 text-lg font-normal text-justify'>
           Holisticly seize parallel metrics and functional ROI.Seamlessly revolutionize error-free internal or organic sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal. Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.
           </p>
           <p className='leading-7 text-lg font-normal text-justify'>Appropriately visualize market-driven data before one-to-one scenarios. Collaboratively productize multifunctional ROI through intuitive supply chains. Enthusiastically seize revolutionary value and process-centric services. Competently harness intuitive information after interoperable markets.</p>


            </div>
            <div className=' w-full lg:w-[50%] mt-[8%]'>
                  <img src="https://res.cloudinary.com/ahossain/image/upload/v1697439245/settings/v7g6gowiju0wanpwx70f.jpg"className='w-full' alt="" />
            </div>
        </div>
        <div className='mx-[5%] mt-4 lg:mt-10'>
            <img src="https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1697439195%2Fsettings%2Fsl8vzvzm54jgzq6sphn2.jpg&w=3840&q=75"className='rounded-lg  object-cover h-full' alt="" />
        </div>
        <div className='mx-[5%] my-4 lg:my-10'>
            <p  className='leading-7 text-lg font-normal text-justify'>Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or organic sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal. Energistically reconceptualize global leadership for high-quality networks. Credibly restore an expanded array of systems rather than accurate results. Collaboratively synergize backend bandwidth without 24/7 functionalities. Credibly utilize proactive ideas whereas cross-media core competencies. Uniquely maximize professional best practices through resource maximizing services. Conveniently architect cross-unit web services for e-business imperatives.</p>
            <br />
            <p className='leading-7 text-lg font-normal text-justify'>Appropriately visualize market-driven data before one-to-one scenarios. Collaboratively productize multifunctional ROI through intuitive supply chains. Enthusiastically seize revolutionary value and process-centric services. Competently harness intuitive information after interoperable markets. Interactively revolutionize future-proof value before granular sources. Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.</p>
           
        </div>

        <OurStore></OurStore>
    </div>
  )
}
