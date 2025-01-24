import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import MilkProducts from '../../Home/MilkProducts/MilkProducts';

const RelatedProducts = ({category}) => {

    const {data  } = useQuery({
        queryKey : ['relatedProducts' , category],
        queryFn : async() => {
            const res = await axios.get(`http://localhost:5000/relatedProducts/${category}`)
            const data = res.data;
            console.log("relatedProducts" , data)
            return data;
        }
    })
    return (
        <div>
            <div>
            <h1 className="text-2xl font-semibold">Related Products</h1>
            </div>

            <div className="grid grid-cols-5 gap-3 mt-4">
                    {
                        data?.map(product => <MilkProducts product={product}></MilkProducts>)
                    }
            </div>

        </div>
    );
};

export default RelatedProducts;

