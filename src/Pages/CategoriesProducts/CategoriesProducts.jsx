import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import MilkProducts from '../Home/MilkProducts/MilkProducts';

const CategoriesProducts = () => {
    const {category} = useParams();
    const {data} = useQuery({
        queryKey : ['CategoriesProducts'], 
        queryFn : async() => {
            const res = await axios.get(`http://localhost:5000/categoryProducts/${category}`)
            console.log(res.data);
            const result = res.data;
            return result
        }
    })
    return (
        <div className="container mx-auto">
            <h1 className="text-xl font-semibold">Category</h1>
            
            <div className="grid grid-cols-5 gap-3">
                {
                    data?.map(product => <MilkProducts product={product}></MilkProducts>)
                }
            </div>
        </div>
    );
};

export default CategoriesProducts;