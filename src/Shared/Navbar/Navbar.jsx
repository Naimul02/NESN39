import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import { RxChevronDown } from "react-icons/rx";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("logout successfully !!")
      })
      .catch(() => { })
  }
  return (
    <>
      <div className="shadow-md bg-white shadow-slate-400 fixed z-10 w-full">

      <div >
      
          <div className="flex items-center justify-between border-b py-3 mx-20">
           <div>
           <Link to="/"><h1 className='text-xl font-bold text-center'>NESN39</h1></Link>
           </div>

          <div>
          <label className="input pr-0  input-bordered rounded-full flex items-center w-[370px] h-[40px]">
  <input type="text" className="grow" placeholder="Search" />

  <button className="w-10 h-10  bg-black rounded-full text-white flex justify-center items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4  text-white font-extrabold">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" className="text-white font-bold" />
  </svg>
  </button>
</label>
          </div>


            
            <div className='flex items-center'>
              {

                user ? <>
                  <Link to="/login"><BiUser className="text-4xl ml-2 mr-1 " /></Link>
                  <Link to="/login" onClick={() => handleLogOut()} className='text-lg font-bold ancor'>Logout</Link>
                </>
                  :
                  <>
                    <Link to="/login"><BiUser className="text-4xl ml-2 mr-1 " /></Link>
                    <Link to="/login" className=' text-lg font-bold ancor'>Login</Link>
                  </>
              }

            </div>


            

          </div>
          <div className="pl-3 lg:hidden block">
            <div className='flex mr-3'>
              <input type="text" placeholder="Search Product Here ..." className="input input-bordered" /><BiSearch className=" searchvai" />
            </div>
          </div>
       
      </div>
      <div className=' flex h-[52px]  justify-between items-center px-20'>
        <div className="dropdown lg:hidden block">
          <label tabIndex={0} className="btn m-1"><GiHamburgerMenu className='text-2xl  mt-2' /></label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/" className=' ancor  text-lg font-semibold ml-0 mr-2 border-r pr-3'>Home</Link></li>
            <li>
              <Link to="/addingservice" className='ancor  text-lg font-semibold mx-2 border-r pr-3'>Services</Link>
            </li>
            <li>
              <Link to="/home" className='border-r pr-3 ancor  text-lg font-semibold mx-2'>Blogs</Link>
            </li>
            <li><Link to="/dashboard" className='border-r pr-3 ancor  text-lg font-semibold mx-2'>Dashboard</Link></li>
            <li>
              <Link to="/contact" className='text-black text-lg font-semibold mx-2 ancor '>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="lg:block hidden">
          <Link to="/" className='border-r pr-3 ancor  text-lg font-semibold ml-0 mr-2'>Home</Link>
<div className="dropdown dropdown-bottom  ancor  text-lg font-semibold border-r pr-3 mx-2">
  <div tabIndex={0} role="button" className="flex items-center"><span className="mr-1">Categories</span> <RxChevronDown /></div>
  <ul tabIndex={0} className="dropdown-content bg-white mt-[14px] menu rounded-md z-[1] w-[300px] p-2 shadow h-[200px] overflow-auto">
    <li><a>Tea Leaves</a></li>
    <li><a>Soap</a></li>
    <li><a>Chanachur</a></li>
    <li><a>Detergent</a></li>
    <li><a>Milk Powder</a></li>
    <li><a>Soap</a></li>
    <li><a>Tissue</a></li>
    <li><a>Salt</a></li>
    <li><a>Turmeric Powder</a></li>
    <li><a>Juice</a></li>
    <li><a>Turmeric Powder</a></li>
    <li><a>Miniket Rice</a></li>
    <li><a>Health Drink</a></li>
    <li><a>Face cream</a></li>
    <li><a>Dishwash Liquid</a></li>
    <li><a>Toilet Cleaner</a></li>
    <li><a>Kitchen Towel</a></li>
    <li><a>Mosquito Spray</a></li>
    <li><a>Washing Powder</a></li>
    <li><a>Antiseptic Liquid</a></li>
    <li><a>Refill</a></li>
    <li><a>Conditionar</a></li>
    <li><a>Stain Remover</a></li>
    <li><a>Floor Cleaner</a></li>
    <li><a>Glass Cleaner</a></li>
    <li><a>Handwash</a></li>
    <li><a>Steel Scrubber</a></li>
    <li><a>Nephthalene Balls</a></li>
    <li><a>Dustbin</a></li>
    <li><a>Hanger</a></li>
  </ul>
</div>
          <Link to="/home" className=' ancor  text-lg font-semibold border-r pr-3 mx-2'>Blogs</Link>
          <Link to="/dashboard" className=' ancor border-r pr-3  text-lg font-semibold mx-2'>Dashboard</Link>
          <Link to="/contact" className=' text-lg font-semibold mx-2 ancor '>Contact</Link>

        </div>

        <div className='mb-3'>
          <div className="avatar">

          </div>
          <div className="avatar flex ">
            <h1 className=' text-lg pr-3 font-bold'>{user?.displayName}</h1>
            <div className="w-10 rounded-full mb-1 mr-2">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
        </div>


      </div>
      </div>
      
    </>
  );
};

export default Navbar;