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


            </div>
            <div className='grid gap-3 grid-cols-1 lg:grid-cols-2 w-full lg:w-[50%] mt-[8%]'>
                    
                    <video className='rounded-lg' src="https://media.istockphoto.com/id/1803923207/video/supermarket-shelves-blurred-background-empty-store.mp4?s=mp4-640x640-is&k=20&c=U3BT52DX6_BgwkdErFrq-kFRZ6pcfsqAZaMA3P9t1So="></video>
                    <video className='rounded-lg' src="https://media.istockphoto.com/id/1803925937/video/supermarket-shelves-blurred-background-empty-store.mp4?s=mp4-640x640-is&k=20&c=QxI3pp6VmdT1TaGv0lsuEs0pO21ROiYRYt8zpkiIARA="></video>
                    


                    
                        <video src="https://media.istockphoto.com/id/2179808994/video/aisle-in-a-supermarket.mp4?s=mp4-640x640-is&k=20&c=p5J2AhZZ14DlT7imdA77R4BsJAoYd9SP2DR73SknRrw=" className='rounded-lg'></video>
                        <video className='rounded-lg' src="https://media.istockphoto.com/id/1766921699/video/black-woman-shopping-at-a-clothing-store-and-paying-to-the-cashier.mp4?s=mp4-640x640-is&k=20&c=rp6ihDiCMEHcuO17HEHiKwMH0_qgSXtj2NFyoZds_J8="></video>
                    
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
