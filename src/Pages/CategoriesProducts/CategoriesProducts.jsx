import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MilkProducts from '../Home/MilkProducts/MilkProducts';
import { RxChevronDown } from 'react-icons/rx';

const CategoriesProducts = () => {

    const [menuValue, setMenuValue] = useState("3");

    const {category} = useParams();
    console.log("category : " , category)
    const {data } = useQuery({
        queryKey : ['CategoriesProducts' , category], 
        queryFn : async() => {
            const res = await axios.get(`http://localhost:5000/categoryProducts/${category}`)
            console.log(res.data);
            const result = res.data;
            console.log("result " , result)
            return result;
            
        }
    })


    const handleMenu = (value) => {
        setMenuValue(value);
      };
    return (
        // <div className='bg-slate-100'>

        // <div className="container px-auto pt-40 pb-16">
        //     <h1 className="text-xl font-semibold">Category</h1>
            
        //     <div className="grid grid-cols-5 gap-3">
        //         {
        //             data?.map(product => <MilkProducts product={product}></MilkProducts>)
        //         }
        //     </div>
        // </div>
        // </div>


        <div className="bg-base-200">
      <div className="border-4">
        <div className="mt-[100px] lg:mt-[150px]">
          <h1 className="text-xl font-semibold text-center py-4 bg-white">
            Home / Category Products{" "}
          </h1>
        </div>
        <div className="mt-10 container mx-auto flex flex-col lg:flex-row lg:gap-12 pb-16">
          <div>
            <div className="sticky lg:top-36">
              <div className="bg-white flex flex-row justify-between lg:justify-normal lg:flex-col mx-4 lg:mx-0 lg:w-[350px]  rounded p-5">
                

                {/* category */}
                {/* <div className="dropdown dropdown-bottom  ancor  text-lg font-semibold border-r pr-3 mx-2">
  <div tabIndex={0} role="button" className="flex items-center"><span className="mr-1">Categories</span> <RxChevronDown /></div>

  
</div> */}
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
              <div className="w-[350px] mt-4 hidden lg:block">
                <h1 className="text-2xl rounded heebo bg-white py-4 font-bold px-3 mb-3">
                  Sponsors
                </h1>
                <img
                  src="https://katieloxton.com/media/wysiwyg/wwdw-bag-gif.gif"
                  className="w-full rounded h-[400px] object-cover"
                  alt="sponsor"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col  lg:flex-row justify-center items-center md:justify-between mx-3 md:mx-0 md:px-6 py-4 rounded  lg:bg-white  mb-10">
              <div className="hidden lg:block  w-full">
                <div className="flex justify-between items-center w-full">
                  <h1 className="text-xl md:text-2xl font-bold heebo text-[#4A4A4A]">
                    Products
                  </h1>
                  <div className="flex flex-row-reverse md:flex-row lg:gap-10 items-center">
                    <div className="flex items-center gap-4">
                      <div className="hover:cursor-pointer hidden lg:block">
                        <img
                          src="https://departmental-store-02.web.app/images/gr3.svg"
                          alt="nai"
                          className="w-[40px] h-[40px] bg-base-200 p-2 rounded"
                          onClick={() => handleMenu("3")}
                        />
                      </div>
                      <div className="hover:cursor-pointer hidden lg:block">
                        <img
                          src="https://departmental-store-02.web.app/images/gr2.svg"
                          alt="nai"
                          className="w-[40px] h-[40px] bg-base-200 p-2 rounded"
                          onClick={() => handleMenu("2")}
                        />
                      </div>
                      <div className="hover:cursor-pointer hidden lg:block">
                        <img
                          src="https://departmental-store-02.web.app/images/gr.svg"
                          alt="nai"
                          className="w-[40px] h-[40px] bg-base-200 p-2 rounded"
                          onClick={() => handleMenu("1")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-4 lg:mx-0">
              {data?.length > 0 ? (
                <div
                  className={`grid grid-cols-1 md:grid-cols-${menuValue} gap-8 -z-10`}
                >
                  {data?.map(
                    (product) =>
                      
                      <Link to={`/detailsProducts/${product?._id}`}>
                        <div
                        key={product._id}
                           className="mx-4 md:mx-0 bg-white transition-all duration-500 transform hover:scale-105 overflow-hidden  lg:h-[252px] shadow-md shadow-gray-700"
                         >
                           <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 md:h-full relative">
                             <div className="w-full lg:w-[35%] h-[220px] lg:h-full p-3 rounded relative">
                               <img
                                 src={product?.img}
                                 alt="product"
                                 className="h-full object-cover w-full"
                               />
                               <h1 className="text-lg text-white bg-[#005689] py-1 px-3 absolute top-6 font-bold right-6">
                                 {product?.category}
                               </h1>
                             </div>
                             <div className="space-y-3 p-5 lg:w-[65%] heebo">
                               <h3 className="text-lg md:text-xl text-[#4A4A4A] font-medium">
                                 {product?.title.slice(0, 30)}...
                               </h3>
                               <p>{product?.description.slice(0, 100)}</p>
                        
                        
                             </div>
                           </div>
                         </div>
                        </Link>
                      
                  )}
                </div>
              ) : (
                <div className="px-8 py-3 flex justify-center text-center my-10  w-full">
                  <div>
                    <h1 className="text-2xl font-bold mb-4">
                      Sorry ! No Products found related this category
                    </h1>

                    <div className="max-w-sm mx-auto rounded-xl mt-6">
                      <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwfdPYGzbsKc3NPMtKVF-Jd7JLkVQU_OuGJIvPCqtH-G-Hw1joSiRdVBZKv9rMcfCFWiENy02Ba85I_CbKZjJDqcLBqE5OZRKyk78aN40Qq0qGiHREjpKGgcnxUilh3lZVi9i6cVxEWpz0/s1600/giphy.gif"
                        alt="nai"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mx-4 mt-4 block lg:hidden">
            <h1 className="text-2xl rounded heebo bg-white py-4 font-bold px-3 mb-3">
              Sponsors
            </h1>
            <img
              src="https://katieloxton.com/media/wysiwyg/wwdw-bag-gif.gif"
              className="w-full rounded h-[400px] object-cover"
              alt="sponsor"
            />
          </div>
        </div>
      </div>
    </div>
    );
};

export default CategoriesProducts;