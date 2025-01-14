import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoArrowSwitch } from "react-icons/go";
import { BsBrightnessHigh } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import { PiShoppingCartFill } from "react-icons/pi";
// import Shipping from "../ShippingHomeSection3/Shipping";

// swiper carousel


import { Swiper, SwiperSlide } from 'swiper/react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { FiDollarSign } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import { useQuery } from "@tanstack/react-query";

// import useCart from "../../hooks/useCart/useCart";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import Loading from "../Loading/Loading";
import { FaFacebook, FaHome, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdOutlineBrowserNotSupported } from "react-icons/md";
import OurStore from "../Home/OurStore/OurStore";
import Review from "../Services/Review/Review";


const DetailsProducts = () => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState(1);
  // const axiosSecure = useAxiosSecure();
  const {id} = useParams();
//   const [ , refetch] = useCart();
  const [disabled , setDisabled] = useState(false);
  const navigate = useNavigate()
  
  const {data : data  , isLoading } = useQuery({
    queryKey : ['product'],
    queryFn : async()=> {
          // const res = await axiosSecure(`/especipicproduct/${id}`);
            const res = await axios.get(`http://localhost:5000/milkProduct/${id}`)
            console.log(res);
            return res.data
    }
  })
  if(isLoading){
    return <Loading></Loading>
  }

  const plus = () => {
    const valueOfPlus = value + 1;
    setValue(valueOfPlus);
  };

  const minus = () => {
    if(value > 1){

      const valueOfMinus = value - 1;
      setValue(valueOfMinus);
    }
  };

  const handleProduct = () => {
    const userInfo = {
      userName: user?.displayName,
      email: user?.email,
    };

    const cartItem = {
      image: data?.img,
      productName: data?.product_name,
      quantity: value,
      recentPrice: data?.recent_price,
      previousPrice: data?.prvious_price,
      userName: userInfo.userName,
      email: userInfo.email,
    };

    // const totalPrice = info.quantity * info.recentPrice;
    // setTotal(totalPrice);
    // console.log("information : ", cartItem);
    // axiosSecure.post('/carts' , cartItem)
    // .then(res => {
    //   console.log(res.data)
    //   if(res.data.insertedId){
    //     toast.success("add to cart successful");
    //     refetch();
    //     setDisabled(true);
    //     navigate('/orders')
    //   }
    // })
    // .catch((error) => {
    //   toast.error(error.message)
    // })
  };

  return (
    
    <>
    <div className="bg-slate-100 py-[200px]">

    <div className="container mx-auto p-12 rounded  bg-white">

      <div className="flex justify-between">
        

        <div className="lg:w-[351px] lg:h-[351px]">
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper lg:w-[351px] lg:h-[351px]"
        // lg:w-[650px] lg:h-[550px]
      >
        <SwiperSlide className="lg:w-[351px] lg:h-[351px]">
          <div className="swiper-zoom-container lg:w-[351px] lg:h-[351px]">
            <img src={data?.image}  className="lg:w-[351px] lg:h-[351px]" />
          </div>
        </SwiperSlide>
        
       
        
      </Swiper>

        </div>
        {/* lg:w-[425px] */}
        <div className="px-4 max-w-[500px]">
          <h2 className="card-title lg:text-3xl text-xl font-bold mb-3">
            {data?.productName}
          </h2>
          <span className="bg-base-200 rounded px-2 font-semibold  text-[#5fa800]">Stock : Available </span>
          <div className="flex items-center gap-2  mt-2">
            <p className="font-semibold text-[#5fa800] bg-base-200 px-2 rounded">Category : {data?.category ? data?.category : 'Fruits'} <span className="underline"></span></p>
            <p className="font-semibold text-[#5fa800] bg-base-200 px-2 rounded">
              Weight : {data?.weight}
            </p>
          </div>
          <div className="flex mt-3">
            <h3 className="lg:text-2xl text-xl font-semibold">
              ৳{data?.price}
            </h3>
            <del className="bg-[#5fa800] ml-3 px-3  text-white lg:text-2xl font-semibold text-xl">
              ৳{data?.originalprice}
            </del>
            
          </div>
          
          <div className="mt-3">
            <p className="text-justify">{data?.des} Most fresh product are low in calories and have a water content in excess of 70 percent, with only about 3.5 percent protein and less than 1 percent fat.The root vegetables include beets, carrots, radishes, sweet potatoes</p>
          </div>
          

          <div>
            <div className="flex mt-3">
              <div className="lg:w-[85px]   mr-[35px] flex lg:mt-2 mt-2">
                <label
                  className="bg-[#cbf890] hover:bg-white   border border-solid border-black px-3 text-lg font-semibold   hover:cursor-pointer h-[30px] "
                  onClick={() => plus()}
                >
                  +
                </label>
                <p className="mx-3">{value}</p>
                <label
                  className="bg-[#cbf890] hover:bg-white border border-solid border-black px-3 text-lg font-semibold hover:cursor-pointer h-[30px]"
                  onClick={() => minus()}
                >
                  -
                </label>
              </div>

              {user ? (
                disabled ? <button
                className="btn hover:bg-[#4d8801] lg:w-[315px] w-[195px] bg-[#5fa800] text-white flex items-center gap-3"
                onClick={() => handleProduct()}disabled
              >
                <FaBagShopping className="text-xl text-white"/> Add To Cart
              </button>
              :

               <button
                className="btn hover:bg-[#4d8801] lg:w-[315px] w-[195px] bg-[#5fa800] text-white flex items-center gap-3"
                onClick={() => handleProduct()}
              >
                <FaBagShopping className="text-xl text-white"/> Add To Cart
              </button>
              ) : (
                <Link to="/login">
                  <button className="btn hover:bg-[#4d8801] lg:w-[315px] ml-5 bg-[#5fa800] text-white w-[195px] flex items-center gap-3">
                    <FaBagShopping className="text-xl text-white"/> Add To Cart
                  </button>
                </Link>
              )}
            </div>
            {user ? (
              <Link to={`/checkoutBuy/${id}`}>
                <button className="btn hover:bg-[#569700]  lg:w-[455px] w-[335px] bg-[#5fa800] text-white mt-3 lg:mr-0 mr-4">
                  <PiShoppingCartFill className="text-xl text-white"/> Buy Now
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn hover:bg-[#569700]  lg:w-[455px] bg-[#5fa800] text-white mt-3 w-full lg:mr-0 mr-4">
                  <PiShoppingCartFill className="text-xl text-white"/> Buy Now
                </button>
              </Link>
            )}
          </div>

          <div className="mt-4">
            <p>Call Us To Order By Mobile Number : <span className="font-semibold text-[#5fa800]">+880 1856376102</span></p>
            <p className="font-bold my-1">Share your social network</p>
            <p>For get lots of traffic from social network share this product</p>
            <div className="flex items-center gap-3 mt-3">
                <span><FaFacebook className="text-3xl"/></span>
                <span><FaTwitter className="text-3xl"/></span>
                <span><FaWhatsapp className="text-3xl"/></span>
                <span><FaLinkedin className="text-3xl"/></span>
            </div>
          </div>
        </div>
        <div className="bg-base-200 lg:max-w-[300px] p-8 rounded space-y-7">
          <div className="flex  items-center gap-3">
          <span><LiaShippingFastSolid className="text-2xl"/></span>
          <p className="text-sm text-gray-600">
          Free shipping applies to all orders over shipping €100
          </p>
          </div>
          <div className="flex items-center gap-3">
          <span><FaHome className="text-2xl"/></span>
          <p className="text-sm text-gray-600">
          Home Delivery within 1 Hour
          </p>
          </div>
          <div className="flex items-center gap-3">
          <span><FiDollarSign className="text-2xl"/></span>
          <p className="text-sm text-gray-600">
          Cash on Delivery Available
          </p>
          </div>
          <div className="flex items-center gap-3">
          <span><GoArrowSwitch className="text-2xl"/></span>
          <p className="text-sm text-gray-600">
          7 Days returns money back guarantee
          </p>
          </div>
          <div className="flex items-center gap-3">
          <span><MdOutlineBrowserNotSupported className="text-2xl"/></span>
          <p className="text-sm text-gray-600">
          Warranty not available for this item
          </p>
          </div>
          <div className="flex items-center gap-3">
          <span><BsBrightnessHigh  className="text-2xl"/></span>
          <p className="text-sm text-gray-600">
          Guaranteed 100% organic from natural products.
          </p>
          </div>
          <div className="flex items-center gap-3">
          <span><IoLocationOutline className="text-2xl"/></span>
          <p className="text-sm text-gray-600">
          Delivery from our pick point Boho One, Bridge Street West, Middlesbrough, North Yorkshire, TS2 1AE.
          </p>
          </div>
        </div>
      </div>


      {/* Related Product */}
      
    </div>
      
    <div>
    <Review id={id}></Review>    
  </div>

    <div className="container mx-auto mt-16">
        <h1 className="text-2xl font-semibold">Related Products</h1>
      </div>
    </div>


      {/* Review */}

      <OurStore></OurStore>
      {/* <Shipping></Shipping> */}
    </>
  );
};

export default DetailsProducts;