import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {toast} from 'react-toastify';
import { LuLogOut, LuMenu } from "react-icons/lu";
import { RxChevronDown } from "react-icons/rx";
import { MdDashboardCustomize, MdOutlineShoppingCart } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaHome, FaShoppingBag, FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import { IoIosContact } from 'react-icons/io';
import { FaMicroblog } from 'react-icons/fa6';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'
import { FiUserX } from 'react-icons/fi';
import { useUserProfileImg } from '../../hooks/useUserProfileImg';
import { useCart } from '../../hooks/useCart';




const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userImg , isLoading] = useUserProfileImg();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  
  


 
 const handleSearch = (e) => {
  console.log(e.key)
      if((e.key === "Enter" || e.type === "click") && searchQuery.trim()){
            navigate(`/searchProducts/${searchQuery}`)
      }

 }

 
  
const [carts , refetch] = useCart()

  const handleDelete = (id) => {
    axios.delete(`https://nesn-39-store-server.vercel.app/product?id=${id}`)
    .then(res => {
      
      if(res.data.deletedCount > 0){
        toast.success('Product Deleted Successfully')
        refetch()
      }
    })
    .catch(error => {
      console.log(error.message)
    })
  }
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
      
          <div className="flex items-center justify-between border-b py-[10px] lg:my-0 lg:mx-16 px-3 lg:px-0">
           <div className="flex justify-between items-center w-full lg:w-auto">
           <Link to="/"><h1 className='text-lg lg:text-xl font-bold text-center'>NESN39</h1></Link>
           <div className="block lg:hidden mx-2">
          <label className="input pr-0  input-bordered rounded-full flex items-center max-w-[370px] h-[40px]">
  <input type="text" className="grow" placeholder="Search"onChange={(e) => setSearchQuery(e.target.value)}onKeyDown={handleSearch} />

  <button onClick={handleSearch} className="w-10 h-10  bg-black rounded-full text-white flex justify-center items-center">
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

        
           
           </div>

          <div className="hidden lg:block">
          <label className="input pr-0  input-bordered rounded-full flex items-center lg:w-[370px] h-[40px]">
  <input type="text" className="grow" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleSearch}/>

  <button className="w-10 h-10  bg-black rounded-full text-white flex justify-center items-center"onClick={handleSearch}>
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


            
            
             <div className='mb-2 hidden lg:block'>
          
          <div className="avatar flex items-center gap-3">
          <div className="drawer  w-[24px] h-[24px] drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content w-[24px] h-[24px]">
    
    <label htmlFor="my-drawer-4" onClick={refetch} className="drawer-button"><MdOutlineShoppingCart className="text-2xl hover:cursor-pointer"/></label>
    
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>


    
    <ul className="menu relative bg-white text-base-content min-h-full  w-[420px]  p-0">
    <div className="flex items-center justify-between bg-slate-200 p-4">
              <div className="flex items-center gap-2">
                <FaShoppingBag className="text-xl" />
              
              <h1 className="text-xl font-bold">Shopping Cart</h1></div>


              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay">
              <div className="pr-6 hover:bg-base-200 p-1 hover:cursor-pointer rounded-full">
              <RxCross2 className='text-2xl font-semibold'/>
              </div>
              </label>
              

    </div>



<div className="overflow-y-auto max-h-[calc(100vh-4rem)] pb-8">

      <div>
        {
          carts?.length > 0 ? 
            carts?.map(cart => <li className=""> <div className="block w-full rounded-none px-4" >
                <div className="flex justify-between w-full items-center">
              
                    <Link to={`/detailsProducts/${cart?.id}`} onClick={()=> document.getElementById('my-drawer-4').checked = false}>
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay flex items-center gap-3">
                    <div className="w-16 h-16">
                  <img src={cart?.img} alt="" className='w-16 h-16 rounded-full'/>
                </div>
                <div>
                  <h2 className="text-sm font-bold">{cart?.title}</h2>
                  <p className="text-gray-500">Item Price : {cart?.recentPrice}</p>
                  <p className="text-sm font-semibold text-gray-500">Total Price : {cart.recentPrice} * {cart?.quantity} = ৳ {cart.recentPrice * cart?.quantity}</p>
                </div>
                    </label>
                    </Link>
                <div className="hover:bg-white rounded-full p-1"onClick={() => handleDelete(cart?._id)}>
                <MdDeleteForever className="text-red-600 text-3xl"/>
                </div>
                </div>
                </div>
              </li>)
           : 
          <div className="flex justify-center pt-[70px]">
           <div className=''>
           <img src="https://img.freepik.com/free-vector/removing-goods-from-basket-refusing-purchase-changing-decision-item-deletion-emptying-trash-online-shopping-app-laptop-user-cartoon-character_335657-2566.jpg" className="max-w-[200px] mx-auto max-h-[200px]" alt=""/>

<div className='px-5'>
  <h1 className="text-xl font-semibold text-center">There are no products in your shopping cart.</h1>
</div>
           </div>

          </div>
        }
              
      </div>
</div>



<Link to={'/checkout'} onClick={()=> document.getElementById('my-drawer-4').checked = false}>
<label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay">
<div className="hover:cursor-pointer  absolute bottom-2 w-full ">
  <div className="flex items-center justify-evenly py-2  bg-[#5fa800] mx-3 rounded-lg">
  <h2 className="text-base  text-white font-medium">Procced to checkout</h2>

<div className="bg-white p-2 text-lg m-2 text-[#5fa800] font-semibold  rounded-lg">
  Total Price : <span className="text-lg font-semibold">৳</span> {carts?.reduce((sum , cart) => sum + (cart?.recentPrice * cart?.quantity) , 0)}
</div>
  </div>
</div>
</label>
</Link>
      
    </ul>
  </div>
</div>

            
            
            
            {user ? <div className="w-10 rounded-full  hidden"><Link to={'/dashboard/orders'}><img src={userImg?.photourl} alt="" className="hidden lg:block" /></Link></div> : <FiUserX className='text-2xl' />}
            </div>
            
            
          
        </div>


            

          </div>
          
       
      </div>




      
     

      <div className="w-full fixed  lg:hidden bottom-0 left-0  bg-[#5fa800] px-4  flex items-center justify-between py-3">
        
        <div className='flex justify-between items-center   w-full'>
        <div className="drawer w-[24px] h-[24px] ">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    
    <label htmlFor="my-drawer" className="drawer-button hover:cursor-pointer"><LuMenu className='text-2xl text-white' />
    
    </label>
  </div>
  <div className="drawer-side z-50">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

    
    <div className="flex items-center justify-between bg-slate-200 p-4">
              <div className="flex items-center gap-2">
                <FaShoppingBag className="text-xl" />
              
              <h1 className="text-xl font-bold">Shopping Cart</h1></div>


              
              <div className="pr-6 hover:bg-base-200 p-1 hover:cursor-pointer rounded-full">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay">
              <RxCross2 className='text-2xl font-semibold'/>

              </label>
              </div>
              

    </div>

    
    <ul className="menu bg-base-200 text-base-content min-h-full    w-screen lg:max-w-80 p-4">
      {/* Sidebar content here */}
       
 

      <div className='border-b-2 pb-2 flex justify-between items-center'>
        <h2 className="text-lg font-semibold">All Categories</h2>
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay">
        <div className="pr-6 hover:bg-slate-200 hover:text-green-500  p-1 hover:cursor-pointer rounded-full">
              <RxCross2 className='text-2xl font-semibold'/>
              </div>
              </label>
      </div>

      <div className='h-[380px] w-full overflow-y-auto'>

      <ul tabIndex={0} className="menu mt-2 p-0">
     
    <li>
   
      <Link to={`/categoriesProducts/${'Tea Leaves'}`} onClick={() => (document.getElementById("my-drawer").checked = false)} className="flex items-center justify-between">
      <a>Tea Leaves</a><img src="https://png.pngtree.com/png-vector/20241105/ourmid/pngtree-tea-leaf-image-png-image_14287414.png"className='w-8 h-8 rounded-full object-cover' alt="" />
      </Link>
     
      </li>
    <li>
      <Link to={`/categoriesProducts/${'Soap'}`}onClick={() => (document.getElementById("my-drawer").checked = false)} className="flex items-center justify-between">
      <a>Soap</a>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEGKyx6VdNDLATQAQ6N0cRMSRxGWJAN8jAA&s"className='w-8 h-8 rounded-full object-cover' alt="" />
      </Link>
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Chanachur'}`}onClick={() => (document.getElementById("my-drawer").checked = false)} className="flex items-center justify-between">     <a>Chanachur</a>
      <img src="https://img.freepik.com/premium-photo/chanachur-mix-with-nut-white-background-chanachur-food_732066-19.jpg?semt=ais_hybrid" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      </li>
      <li>
      <Link to={`/categoriesProducts/${'Detergent'}`}onClick={() => (document.getElementById("my-drawer").checked = false)} className="flex items-center justify-between">
      <a>Detergent</a>
      <img src="https://5.imimg.com/data5/SELLER/Default/2023/10/349396520/WW/AN/EB/71975281/loose-detergent-washing-powder-500x500.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Milk Powder'}`}onClick={() => (document.getElementById("my-drawer").checked = false)} className="flex items-center justify-between">
      <a>Milk Powder</a>
      <img src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/65fa9511115075f231ec75ba_Fresh-Instant-Full-Cream-Milk-Powder-1000gm_1.webp" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Tissue'}`} className="flex items-center justify-between">
      <a>Tissue</a>
      <img src="https://www.northwood.co.uk/wp-content/uploads/2024/02/FT2W24.png" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Salt'}`} className="flex items-center justify-between">
      <a>Salt</a>
      <img src="https://ohmyfacts.com/wp-content/uploads/2024/10/23-facts-about-salt-1730311890.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Turmeric Powder'}`} className="flex items-center justify-between">
      <a>Turmeric Powder</a>
      <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/15065/conversions/fa246ce0-054b-4892-bf30-5eb43cd938aa-thumb.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Juice'}`} className="flex items-center justify-between">
      <a>Juice</a>
      <img src="https://theallnaturalvegan.com/wp-content/uploads/2023/08/mango-juice-featured-image.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Miniket Rice'}`} className="flex items-center justify-between">
      <a>Miniket Rice</a>
      <img src="https://sdlgradiant.com/wp-content/uploads/Minikethead1-1.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Health Drink'}`} className="flex items-center justify-between">
      <a>Health Drink</a>
      <img src="https://tandobeverage.com/wp-content/uploads/2021/08/kind-of-healthy-drinks-to-do-sell.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Face Cream'}`} className="flex items-center justify-between">
      <a>Face Cream</a>
      <img src="https://www.banglashoppers.com/media/catalog/product/cache/bc88681de0f284d41e3ecc10556443c6/r/e/retinol-face-cream-1_1280x.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Dishwash Liquid'}`} className="flex items-center justify-between">
      <a>Dishwash Liquid</a>
      <img src="https://vitacare.com.bd/wp-content/uploads/2023/11/jpj-scaled.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Toilet Cleaner'}`} className="flex items-center justify-between">
      <a>Toilet Cleaner</a>
      <img src="https://image.made-in-china.com/2f0j00PaGYEyNtqQbm/Character-Toilet-Blue-Bubble-Cleaner-Auto-Toilet-Bowl-Cleaner.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Kitchen Towel'}`} className="flex items-center justify-between">
      <a>Kitchen Towel</a>
      <img src="https://static-01.daraz.com.bd/p/4a700e6fe016fa6d85ab0686d24ee8ee.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Mosquito Spray'}`} className="flex items-center justify-between">
      <a>Mosquito Spray</a>
      <img src="https://squaretoiletries.com/wp-content/uploads/2022/10/Xpel-Natural-Mosquito-Repellent-Spray-Jul24.png" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Washing Powder'}`} className="flex items-center justify-between">
      <a>Washing Powder</a>
      <img src="https://www.neareshop.com/wp-content/uploads/2023/07/Best-Detergent-Powder-Brands-in-India.webp" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Antiseptic Liquid'}`} className="flex items-center justify-between">
      <a>Antiseptic Liquid</a>
      <img src="https://www.keyaseth.com/cdn/shop/products/ankush-ayurvedic-antiseptic-liquid-no-burning-sensation-for-first-aid-personal-hygiene-enriched-with-neem-tulsi-lavender-rose-essential-oil-29703386595488.jpg?v=1727405188" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Refill'}`} className="flex items-center justify-between">
      <a>Refill</a>
      <img src="https://resparkle.com/cdn/shop/collections/resparkle-refill.jpg?v=1670563996" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Conditionar'}`} className="flex items-center justify-between">
      <a>Conditionar</a>
      <img src="https://www.skinplusbd.com/public/uploads/all/d6GVPxpyEjlEy5R7F53r6jhF25wkJGGuB2OfA1X1.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Stain Remover'}`} className="flex items-center justify-between">
      <a>Stain Remover</a>
      <img src="https://delphiseco.com/cdn/shop/files/delphis-eco-stain-remover-fgr-partnership_1024x684.jpg?v=1714470642" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/${'Floor Cleaner'}`} className="flex items-center justify-between">
      <a>Floor Cleaner</a>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudNUlxMA9N4dPEWZ8Xv2WyhiWWXb0YPdRPA&s" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/Glass Cleaner`} className="flex items-center justify-between">
      <a>Glass Cleaner</a>
      <img src="https://vitacare.com.bd/wp-content/uploads/2023/12/website-1.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/Handwash`} className="flex items-center justify-between">
      <a>Handwash</a>
      <img src="https://static.vecteezy.com/system/resources/previews/006/921/756/non_2x/washing-hand-cartoon-icon-illustration-people-medical-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/Steel Scrubber`} className="flex items-center justify-between">
      <a>Steel Scrubber</a>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfo2zHe1GY-3DMC7EyUPF6N3rF34eSn8yt8Q&s" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/Nephthalene Balls`} className="flex items-center justify-between">
      <a>Nephthalene Balls</a>
      <img src="https://nepalchemical.com/wp-content/uploads/2019/07/pure-naphthalene-balls-500x500.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
    </li>
    
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/Dustbin`} className="flex items-center justify-between">
      <a>Dustbin</a>
      <img src="https://nilkamalfurniture.com/cdn/shop/files/TDB10LPGR-BLU-IBK.jpg?v=1697614010&width=1080" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
    </li>
    <li>
      <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to={`/categoriesProducts/Hanger`} className="flex items-center justify-between">
      <a>Hanger</a>
      <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2022-09/hch-202----.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
    </li>
  </ul>
      </div>


      <div className='border-b-2 pb-2 mt-4'>
        <h2 className="text-lg font-semibold">Pages</h2>
      </div>
      
      <li><Link onClick={() => (document.getElementById("my-drawer").checked = false)} to="/" className='ancor  font-semibold mt-2 border-r pr-3 flex items-center'><FaHome className='text-xl'/>Home </Link></li>
            
            <li>
              <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to="/blogs" className='border-r pr-3 ancor flex-items-center  font-semibold'><FaMicroblog className="text-xl" /> Blogs</Link>
            </li>
            <li><Link onClick={() => (document.getElementById("my-drawer").checked = false)} to="/dashboard/orders" className='border-r pr-3 ancor  font-semibold flex items-center'><MdDashboardCustomize className='text-xl' /> Dashboard</Link></li>
            <li>
              <Link onClick={() => (document.getElementById("my-drawer").checked = false)} to="/contact" className='text-black flex items-center font-semibold  ancor '><IoIosContact className="text-xl" />Contact</Link>
            </li>
    </ul>
  </div>
</div>



       
        <div>
              <Link to={'/'}><FaHome className="text-white text-2xl font-semibold"/></Link>
        </div>
        <div>
          
        <div className='block z-0 lg:hidden'>
          
      
          <div className="drawer z-40  drawer-end ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content w-[24px] h-[24px]">
  <div className="indicator z-0">
  <span className="indicator-item badge bg-red-600 text-white rounded-full border-none ">{carts?.length}</span>
    <label htmlFor="my-drawer-2" onClick={refetch} className="drawer-button "><MdOutlineShoppingCart className="text-2xl hover:cursor-pointer text-white"/></label>
    </div>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>


    
    <ul className="menu relative bg-white text-base-content min-h-full w-screen z-20 lg:max-w-[420px]  p-0">
    <div className="flex items-center justify-between bg-slate-200 p-4">
              <div className="flex items-center gap-2">
                
                <FaShoppingBag className="text-xl" />
              
              <h1 className="text-xl font-bold">Shopping Cart</h1></div>


              <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay">
              <div className="pr-6 hover:bg-base-200 p-1 hover:cursor-pointer rounded-full">
              <RxCross2 className='text-2xl font-semibold'/>
              </div>
              </label>
              

    </div>



<div className="overflow-y-auto max-h-[calc(100vh-4rem)] pb-8">

      <div>
        {
          carts?.length > 0 ? 
            carts?.map(cart => <li className=""> <div className="block w-full rounded-none px-4" >
                <div className="flex justify-between w-full items-center">
              
                    <Link to={`/detailsProducts/${cart?.id}`} onClick={()=> document.getElementById('my-drawer-2').checked = false}>
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay flex items-center gap-3">
                    <div className="w-16 h-16">
                  <img src={cart?.img} alt="" className='w-16 h-16 rounded-full'/>
                </div>
                <div>
                  <h2 className="text-sm font-bold">{cart?.title}</h2>
                  <p className="text-gray-500">Item Price : {cart?.recentPrice}</p>
                  <p className="text-sm font-semibold text-gray-500">Total Price : {cart.recentPrice} * {cart?.quantity} = ৳ {cart.recentPrice * cart?.quantity}</p>
                </div>
                    </label>
                    </Link>
                <div className="hover:bg-white rounded-full p-1"onClick={() => handleDelete(cart?._id)}>
                <MdDeleteForever className="text-red-600 text-3xl"/>
                </div>
                </div>
                </div>
              </li>)
           : 
          <div className="flex justify-center pt-[50px] lg:pt-[70px]">
           <div className=''>
           <img src="https://img.freepik.com/free-vector/removing-goods-from-basket-refusing-purchase-changing-decision-item-deletion-emptying-trash-online-shopping-app-laptop-user-cartoon-character_335657-2566.jpg" className="max-w-[200px] mx-auto max-h-[200px]" alt=""/>

<div className='px-5'>
  <h1 className="text-xl font-semibold text-center">There are no products in your shopping cart.</h1>
</div>
           </div>

          </div>
        }
              
      </div>
</div>



<Link to={'/checkout'} onClick={()=> document.getElementById('my-drawer-2').checked = false}>
<label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay">
<div className="hover:cursor-pointer  absolute bottom-2 w-full ">
  <div className="flex items-center justify-evenly py-2  bg-[#5fa800] mx-3 rounded-lg">
  <h2 className="text-base  text-white font-medium">Procced to checkout</h2>

<div className="bg-white p-2 text-lg m-2 text-[#5fa800] font-semibold  rounded-lg">
  Total Price : <span className="text-lg font-semibold">৳</span> {carts?.reduce((sum , cart) => sum + (cart?.recentPrice * cart?.quantity) , 0)}
</div>
  </div>
</div>
</label>
</Link>
      
    </ul>
  </div>
</div>

            
            
           <Link to={'/dashboard/orders'}> <div className="w-10 rounded-full mb-1 mr-2 hidden lg:block">
              <img src={userImg?.photourl} alt="" className="hidden lg:block" />
            </div></Link>
            
            
        
        </div>

        {/* <FaShoppingBag className="text-2xl text-white font-semibold" /> */}
        
        </div>
        <div>
          

<Tooltip id="my-tooltip" />

          {
            user ?
            <Link to={'/dashboard/orders'}>
               <div className="w-[28px] h-[28px] rounded-full   block lg:hidden">
         { isLoading ? <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div> : <img src={userImg?.photourl} alt="" className="rounded-full w-full h-full" />}
        </div> 
        
       {/* <span><LuLogOut className="text-2xl  text-white font-semibold hover:cursor-pointer" onClick={handleLogOut}/></span> */}
    </Link> :   
    
    
    <Link to={'/login'} data-tooltip-id="my-tooltip" data-tooltip-content="Login"className='inline-block'>
    {
      isLoading ? <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div> : 
    <span><FaUser className="text-2xl  text-white font-semibold hover:cursor-pointer"/></span>
    }
    
 </Link>
   
    
          }
        
        </div>
        </div>
     
        </div>
      <div className='lg:h-[52px] hidden lg:flex  justify-between items-center px-20'>
        
        
      <div className="lg:block hidden">
          <Link to="/" className='border-r pr-3 ancor  text-lg font-semibold ml-0 mr-2'>Home</Link>
<div className="dropdown dropdown-bottom  ancor  text-lg font-semibold border-r pr-3 mx-2">
  <div tabIndex={0} role="button" className="flex items-center"><span className="mr-1">Categories</span> <RxChevronDown /></div>

  <div className="w-[300px] h-[300px] overflow-y-auto dropdown-content  bg-white mt-[14px] rounded-md z-[1]  shadow">

  <ul tabIndex={0} className="menu   p-2">
    <li>
      <Link to={`/categoriesProducts/${'Tea Leaves'}`} className="flex items-center justify-between px-12">
      <a>Tea Leaves</a><img src="https://png.pngtree.com/png-vector/20241105/ourmid/pngtree-tea-leaf-image-png-image_14287414.png"className='w-8 h-8 rounded-full object-cover' alt="" />
      </Link>
      </li>
    <li>
      <Link to={`/categoriesProducts/${'Soap'}`} className="flex items-center justify-between  px-12">
      <a>Soap</a>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEGKyx6VdNDLATQAQ6N0cRMSRxGWJAN8jAA&s"className='w-8 h-8 rounded-full object-cover' alt="" />
      </Link>
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Chanachur'}`} className="flex items-center justify-between px-12">
      <a>Chanachur</a>
      <img src="https://img.freepik.com/premium-photo/chanachur-mix-with-nut-white-background-chanachur-food_732066-19.jpg?semt=ais_hybrid" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      </li>
      <li>
      <Link to={`/categoriesProducts/${'Detergent'}`} className="flex items-center justify-between  px-12">
      <a>Detergent</a>
      <img src="https://5.imimg.com/data5/SELLER/Default/2023/10/349396520/WW/AN/EB/71975281/loose-detergent-washing-powder-500x500.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Milk Powder'}`} className="flex items-center justify-between  px-12">
      <a>Milk Powder</a>
      <img src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/65fa9511115075f231ec75ba_Fresh-Instant-Full-Cream-Milk-Powder-1000gm_1.webp" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    
    <li>
      <Link to={`/categoriesProducts/${'Tissue'}`} className="flex items-center justify-between  px-12">
      <a>Tissue</a>
      <img src="https://www.northwood.co.uk/wp-content/uploads/2024/02/FT2W24.png" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Salt'}`} className="flex items-center justify-between  px-12">
      <a>Salt</a>
      <img src="https://ohmyfacts.com/wp-content/uploads/2024/10/23-facts-about-salt-1730311890.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Turmeric Powder'}`} className="flex items-center justify-between  px-12">
      <a>Turmeric Powder</a>
      <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/15065/conversions/fa246ce0-054b-4892-bf30-5eb43cd938aa-thumb.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Juice'}`} className="flex items-center justify-between  px-12">
      <a>Juice</a>
      <img src="https://theallnaturalvegan.com/wp-content/uploads/2023/08/mango-juice-featured-image.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Miniket Rice'}`} className="flex items-center justify-between  px-12">
      <a>Miniket Rice</a>
      <img src="https://sdlgradiant.com/wp-content/uploads/Minikethead1-1.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Health Drink'}`} className="flex items-center justify-between  px-12">
      <a>Health Drink</a>
      <img src="https://tandobeverage.com/wp-content/uploads/2021/08/kind-of-healthy-drinks-to-do-sell.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Face Cream'}`} className="flex items-center justify-between  px-12">
      <a>Face Cream</a>
      <img src="https://www.banglashoppers.com/media/catalog/product/cache/bc88681de0f284d41e3ecc10556443c6/r/e/retinol-face-cream-1_1280x.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Dishwash Liquid'}`} className="flex items-center justify-between  px-12">
      <a>Dishwash Liquid</a>
      <img src="https://vitacare.com.bd/wp-content/uploads/2023/11/jpj-scaled.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Toilet Cleaner'}`} className="flex items-center justify-between  px-12">
      <a>Toilet Cleaner</a>
      <img src="https://image.made-in-china.com/2f0j00PaGYEyNtqQbm/Character-Toilet-Blue-Bubble-Cleaner-Auto-Toilet-Bowl-Cleaner.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Kitchen Towel'}`} className="flex items-center justify-between  px-12">
      <a>Kitchen Towel</a>
      <img src="https://static-01.daraz.com.bd/p/4a700e6fe016fa6d85ab0686d24ee8ee.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Mosquito Spray'}`} className="flex items-center justify-between  px-12">
      <a>Mosquito Spray</a>
      <img src="https://squaretoiletries.com/wp-content/uploads/2022/10/Xpel-Natural-Mosquito-Repellent-Spray-Jul24.png" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    
    <li>
      <Link to={`/categoriesProducts/${'Washing Powder'}`} className="flex items-center justify-between  px-12">
      <a>Washing Powder</a>
      <img src="https://www.neareshop.com/wp-content/uploads/2023/07/Best-Detergent-Powder-Brands-in-India.webp" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Antiseptic Liquid'}`} className="flex items-center justify-between  px-12">
      <a>Antiseptic Liquid</a>
      <img src="https://www.keyaseth.com/cdn/shop/products/ankush-ayurvedic-antiseptic-liquid-no-burning-sensation-for-first-aid-personal-hygiene-enriched-with-neem-tulsi-lavender-rose-essential-oil-29703386595488.jpg?v=1727405188" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    
    <li>
      <Link to={`/categoriesProducts/${'Refill'}`} className="flex items-center justify-between  px-12">
      <a>Refill</a>
      <img src="https://resparkle.com/cdn/shop/collections/resparkle-refill.jpg?v=1670563996" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Conditionar'}`} className="flex items-center justify-between  px-12">
      <a>Conditionar</a>
      <img src="https://www.skinplusbd.com/public/uploads/all/d6GVPxpyEjlEy5R7F53r6jhF25wkJGGuB2OfA1X1.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Stain Remover'}`} className="flex items-center justify-between  px-12">
      <a>Stain Remover</a>
      <img src="https://delphiseco.com/cdn/shop/files/delphis-eco-stain-remover-fgr-partnership_1024x684.jpg?v=1714470642" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/${'Floor Cleaner'}`} className="flex items-center justify-between  px-12">
      <a>Floor Cleaner</a>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudNUlxMA9N4dPEWZ8Xv2WyhiWWXb0YPdRPA&s" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/Glass Cleaner`} className="flex items-center justify-between  px-12">
      <a>Glass Cleaner</a>
      <img src="https://vitacare.com.bd/wp-content/uploads/2023/12/website-1.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/Handwash`} className="flex items-center justify-between  px-12">
      <a>Handwash</a>
      <img src="https://static.vecteezy.com/system/resources/previews/006/921/756/non_2x/washing-hand-cartoon-icon-illustration-people-medical-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/Steel Scrubber`} className="flex items-center justify-between  px-12">
      <a>Steel Scrubber</a>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfo2zHe1GY-3DMC7EyUPF6N3rF34eSn8yt8Q&s" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
      
    
    </li>
    <li>
      <Link to={`/categoriesProducts/Nephthalene Balls`} className="flex items-center justify-between  px-12">
      <a>Nephthalene Balls</a>
      <img src="https://nepalchemical.com/wp-content/uploads/2019/07/pure-naphthalene-balls-500x500.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
    </li>
    
    <li>
      <Link to={`/categoriesProducts/Dustbin`} className="flex items-center justify-between  px-12">
      <a>Dustbin</a>
      <img src="https://nilkamalfurniture.com/cdn/shop/files/TDB10LPGR-BLU-IBK.jpg?v=1697614010&width=1080" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
    </li>
    <li>
      <Link to={`/categoriesProducts/Hanger`} className="flex items-center justify-between  px-12">
      <a>Hanger</a>
      <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2022-09/hch-202----.jpg" alt=""className='w-8 h-8 rounded-full object-cover'/>
        </Link>
    </li>
  </ul>
  </div>
</div>
          <Link to="/blogs" className=' ancor  text-lg font-semibold border-r pr-3 mx-2'>Blogs</Link>
          <Link to="/dashboard/orders" className=' ancor border-r pr-3  text-lg font-semibold mx-2'>Dashboard</Link>
          <Link to="/contact" className=' text-lg font-semibold mx-2 ancor '>Contact</Link>

        </div>
        

        <div className='flex items-center'>
              {

                user ? <>
                  <Link to="/login"><BiUser className="text-4xl  hidden lg:block ml-2 mr-1 " /></Link>
                  <Link to="/login" onClick={() => handleLogOut()} className='text-lg font-bold hidden lg:block ancor'>Logout</Link>
                </>
                  :
                  <>
                    <Link to="/login"><BiUser className="text-4xl ml-2 mr-1 " /></Link>
                    <Link to="/login" className=' text-lg font-bold ancor'>Login</Link>
                  </>
              }

            </div>



      </div>

      
      </div>
      
    </>
  );
};

export default Navbar;