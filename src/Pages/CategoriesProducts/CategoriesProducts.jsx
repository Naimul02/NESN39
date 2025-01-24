import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import MilkProducts from '../Home/MilkProducts/MilkProducts';

const CategoriesProducts = () => {
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
    return (
        <div className='bg-slate-100'>

        <div className="container px-auto pt-40 pb-16">
            <h1 className="text-xl font-semibold">Category</h1>
            
            <div className="grid grid-cols-5 gap-3">
                {
                    data?.map(product => <MilkProducts product={product}></MilkProducts>)
                }
            </div>
        </div>
        </div>
    );
};

export default CategoriesProducts;