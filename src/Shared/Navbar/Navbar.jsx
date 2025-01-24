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