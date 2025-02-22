import React from 'react';

const Footer = () => {
  return (


    <div>


<footer className="footer shadow-2xl border-t bg-white text-base-content p-10 ">
  <aside>

    <div className='w-14 h-14 rounded-full'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ber-bSl4Z_DZ3KvemcrKJD6fn9MbKaElbQ&s" className='w-full h-full rounded-full' alt="" />
    </div>
    <p className='text-lg'>
      NESN39
    
    </p>
    <p>Feni , Bangladesh</p>
    <p>Tel : + 990*******09</p>
    <p>Email : depart....39@gmail.com</p>
    
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer footer-center bg-white border-t text-base-content p-4 mb-[13%] lg:mb-0">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by NESN39</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;