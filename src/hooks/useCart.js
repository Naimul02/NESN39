import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'

export const useCart = () => {
    const {user} = useContext(AuthContext)
    const id = localStorage.getItem('id')
    

    const {data: carts = [] , refetch   } = useQuery({
        queryKey : ['cart' , user?.email],
        queryFn : async() => {
         const res = await axios.get(`http://localhost:5000/carts?email=${user?.email}`)
         console.log("cartsss : " , res.data)
         
      return res.data
        }
     })
  return [carts , refetch]
  
  
}
