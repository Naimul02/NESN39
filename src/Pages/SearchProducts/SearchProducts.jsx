import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MilkProducts from '../Home/MilkProducts/MilkProducts'

export const SearchProducts = () => {
  const [filteredData , setFilteredData] = useState([]);
  const {query} = useParams();
  console.log("query " , query , 'filteredData : ' , filteredData)

  const {data : searchProducts = []} = useQuery({
          queryKey : ['searchProducts'] , 
          queryFn  : async() => {
              const res = await axios.get('https://nesn-39-store-server.vercel.app/products');
              const result = res.data;
              console.log("result : " , result)
              return result;

          }
  })

  useEffect(() => {
        if(query){
            const result = searchProducts.filter(product => {
              return (
                product?.title.toLowerCase().includes(query.toLocaleLowerCase()) || product?.category.toLowerCase().includes(query.toLowerCase()) || product?.description.toLowerCase().includes(query.toLowerCase())
            
            )
        })
          setFilteredData(result)

        }
  } , [query])
  return (
    <div className='lg:pt-[120px] bg-slate-100'>
    
      {
        filteredData?.length > 0 && <div className='flex flex-col pl-2 pr-2 lg:pl-0 lg:pr-0 items-center pt-24 lg:pt-10'>
        <h1 className="text-xl lg:text-2xl font-bold">Your search products</h1>
        <p className='block lg:hidden text-base text-center mt-1'>Sir I have found <span className='text-xl font-bold text-[#5fa800]'>{filteredData?.length} </span> for you among  the  <br />  products you are looking for.</p>
        <p className='hidden lg:block text-lg text-center mt-1'>Sir I have found <span className='text-xl font-bold text-[#5fa800]'>{filteredData?.length} </span> for you among  the  products<br />   you are looking for.</p>
    </div>
      }
    {

      filteredData?.length > 0 ?  <div className="grid pl-[10px] lg:pl-6 pr-[10px] lg:pr-6 py-4  lg:py-10 grid-cols-2 lg:grid-cols-5 gap-[10px] lg:gap-4">
      {
       filteredData?.map(product => <MilkProducts
        key={product._id}
        product={product}
        ></MilkProducts>)
      }
    </div> : <div className="px-8 py-20 lg:py-12  flex justify-center text-center  w-full bg-white">
      <div>
        <h1 className="text-base lg:text-lg lg:font-bold text-center font-medium my-2">
        Sorry sir, we don't have the product you are <br /> looking for right now.
        </h1>
       <div className='animate-bounce'>
       <Link to={'/'} className="underline">Back to Shopping</Link>
        </div> 

        <div className="max-w-md  mx-auto rounded-xl mt-1">
          <img className="rounded-xl"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwfdPYGzbsKc3NPMtKVF-Jd7JLkVQU_OuGJIvPCqtH-G-Hw1joSiRdVBZKv9rMcfCFWiENy02Ba85I_CbKZjJDqcLBqE5OZRKyk78aN40Qq0qGiHREjpKGgcnxUilh3lZVi9i6cVxEWpz0/s1600/giphy.gif"
            alt="nai"
          />
        </div>
      </div>
    </div>
    }
     
    </div>
  )
}
