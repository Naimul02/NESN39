import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'

export const useCart = () => {
    const {user} = useContext(AuthContext)

    const {data: carts = [] , refetch   } = useQuery({
        queryKey : ['carts' , user?.email],
        queryFn : async() => {
         const res = await axios.get(`http://localhost:5000/carts?email=${user?.email}`)
         
      return res.data
        }
     })
  return [carts , refetch]
  
  
}
