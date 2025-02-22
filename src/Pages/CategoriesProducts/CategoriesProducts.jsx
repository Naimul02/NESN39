import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MilkProducts from '../Home/MilkProducts/MilkProducts';
import { AiOutlineAppstore } from "react-icons/ai";



const CategoriesProducts = () => {

    const [menuValue, setMenuValue] = useState("4");
    console.log(menuValue)

    const {category} = useParams();
    console.log("category : " , category)
    const {data } = useQuery({
        queryKey : [ 'CategoriesProducts' , category ], 
        queryFn : async() => {
            const res = await axios.get(`https://nesn-39-store-server.vercel.app/categoryProducts/${category}`)
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
        


        <div className="bg-base-200">
      <div className="border-4">
        <div className="mt-[100px] lg:mt-[150px]">
          <h1 className="text-xl font-semibold text-center py-4 bg-white">
            Home / Category Products{" "}
          </h1>
        </div>
        <div className="mt-10 mx-[10px] lg:mx-5 flex flex-col lg:flex-row lg:gap-3 pb-16">
          <div>
            <div className="sticky lg:top-36">
              <div className="bg-white   lg:w-[300px]  rounded">
                

                
<div className="h-[400px] w-full overflow-y-auto dropdown-content   z-[1]  shadow">

  <ul tabIndex={0} className="menu p-2">
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
              <div className="w-[300px] mt-4 hidden lg:block">
                <h1 className="text-xl rounded  bg-white py-4 font-bold px-3 mb-3">
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
            <div className="flex flex-col  lg:flex-row justify-center items-center md:justify-between   lg:mx-5 px-6 py-3 rounded  lg:bg-white  lg:mb-10">
              <div className="hidden lg:block  w-full">
                <div className="flex justify-between items-center w-full">
                  <h1 className="text-xl  font-bold  text-[#4A4A4A]">
                    Products
                  </h1>

                  <select className="select font-semibold select-bordered w-full max-w-xs">
  <option disabled selected className='font-semibold'>Price Range</option>
  <option className="font-semibold">Low to high</option>
  <option className='font-semibold'>High to low</option>
</select>

                  <div className="flex flex-row-reverse md:flex-row lg:gap-10 items-center">
                    <div className="flex items-center gap-4">
                      <div className="hover:cursor-pointer hidden lg:block" onClick={() => handleMenu("4")}>
                        <div className="w-[30px] h-[35px] bg-base-200 p-1 flex items-center rounded">
                            <AiOutlineAppstore className="text-3xl" />                       
                        </div>
                      </div>
                      <div className="hover:cursor-pointer hidden lg:block">
                        <img
                          src="https://departmental-store-02.web.app/images/gr3.svg"
                          alt="nai"
                          className="w-[30px] h-[35px] bg-base-200 p-2 rounded"
                          onClick={() => handleMenu("3")}
                        />
                      </div>
                      <div className="hover:cursor-pointer hidden lg:block">
                        <img
                          src="https://departmental-store-02.web.app/images/gr2.svg"
                          alt="nai"
                          className="w-[30px] h-[35px] bg-base-200 p-2 rounded"
                          onClick={() => handleMenu("2")}
                        />
                      </div>
                      <div className="hover:cursor-pointer hidden lg:block">
                        <img
                          src="https://departmental-store-02.web.app/images/gr.svg"
                          alt="nai"
                          className="w-[30px] h-[35px] bg-base-200 p-2 rounded"
                          onClick={() => handleMenu("1")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:mx-5">
              {data?.length > 0 ? (
                <div
                  className={`grid grid-cols-2 ${menuValue === '4' ? "md:grid-cols-4" :
    menuValue === '3' ? "md:grid-cols-3" : menuValue === '2' ? "md:grid-cols-2"  : "md:grid-cols-1"
  } gap-[10px] md:gap-4  -z-10`}
                >
                  {data?.map(
                    (product) =>
                      
                      <Link to={`/detailsProducts/${product?._id}`}>
                      
                         <MilkProducts product={product}></MilkProducts>
                        </Link>
                      
                  )}
                </div>
              ) : (
                <div className="px-8 py-3 flex justify-center text-center my-10  w-full">
                  <div>
                    <h1 className="text-xl font-bold mb-4">
                      Sorry ! No Products found related this category
                    </h1>

                    <div className="max-w-md  mx-auto rounded-xl mt-8">
                      <img className="rounded-xl"
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwfdPYGzbsKc3NPMtKVF-Jd7JLkVQU_OuGJIvPCqtH-G-Hw1joSiRdVBZKv9rMcfCFWiENy02Ba85I_CbKZjJDqcLBqE5OZRKyk78aN40Qq0qGiHREjpKGgcnxUilh3lZVi9i6cVxEWpz0/s1600/giphy.gif"
                        alt="nai"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className=" mt-4 block lg:hidden">
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