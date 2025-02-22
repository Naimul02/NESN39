
import React, { useContext, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Contact = () => {
  const {user}  = useContext(AuthContext)
  const form = useRef();
  console.log(form.current);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_h1mz2rq', 'template_kczfl4m', form.current, {
          publicKey: 'ZDxp9iAnajODxBydM',
        })
        .then(
          () => {
            console.log('SUCCESS!');

            toast.success("Your Message has been sent successfully!")
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
        <div id="contact" className="w-full pt-[16%] lg:pt-[8%]  bg-white">
            <div className="bg-[url('https://res.cloudinary.com/ahossain/image/upload/v1697439245/settings/yw3cd2xupqwqpqcbxv9l.jpg')] h-[100px] lg:h-[200px] bg-cover bg-no-repeat bg-center">
                <div className='flex justify-center items-center h-full'>
                    <h1 className="text-2xl lg:text-3xl font-bold">Contact Us</h1>
                </div>
        </div>
        <div className="max-w-5xl mx-auto py-16">


            
           
            

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div  className="text-center lg:text-left lg:w-[50%] lg:h-[442px]">
        
            
            <img src="https://www.subraa.com/there/wp-content/uploads/2020/05/Contact-Subraa-Freelance-Web-Designer-in-Singapore-1.gif"className="w-full h-full rounded-xl object-cover"/>
    
        </div>
    <div  className=" w-full lg:w-[50%]">
        <div>
      <form className=""ref={form} onSubmit={sendEmail} >
      <div className="form-control border-none">
          <label className="label">
            <span className="label-text text-xl text-[#5fa800] font-semibold">Name</span>
          </label>
          <input type="text" placeholder="name"name="from_name"id="fullName" className="px-4 py-3 border rounded-lg border-[#5fa800] text-black" required defaultValue={user?.displayName}/>
          
        </div>
        <div className="form-control border-none">
          <label className="label">
            <span className="label-text text-xl text-[#5fa800] font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email"name="from_email"id="email_id" className="px-4 py-3 border rounded-lg text-black border-[#5fa800]"defaultValue={user?.email} required />
        </div>

        <div className="form-control border-none">
        <label className="label">
            <span className="label-text text-xl text-[#5fa800] font-semibold">Message</span>
          </label>
        <textarea id="message" className="h-[150px] rounded-lg text-black px-4 py-3 border border-[#5fa800]"name="message" placeholder="your  message"></textarea>
        </div>
       
        <div className="form-control mt-6 border-none">
          <button className="btn bg-[#5fa800] hover:bg-[#5fa800] text-white text-xl font-semibold">Submit</button>
        </div>
      </form>

      <ToastContainer />
    </div>
    </div>
  </div>
        </div>
</div>
    );
};

export default Contact;