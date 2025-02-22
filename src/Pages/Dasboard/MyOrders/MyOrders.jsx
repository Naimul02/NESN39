import React, { useContext } from 'react'
import Loading from '../../Loading/Loading';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { BiLockAlt, BiMenu } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineReviews } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import { toast } from 'react-toastify';


export const MyOrders = () => {
     const { user } = useContext(AuthContext);
     const [isAdmin] = useAdmin(user?.email);
    const { refetch, isLoading, data: orders = [] } = useQuery({
        queryKey: ["orders", user?.email],
        queryFn: async () => {
          const res = await axios.get(`https://nesn-39-store-server.vercel.app/orders?email=${user?.email}`);
          console.log("data" , res.data)
          return res.data
    
        }
      });
    
      const handleDeleteOrder = (id) => {
    
        
    
        axios.delete(`https://nesn-39-store-server.vercel.app/order/${id}`)
          
          .then(res => {
            console.log(res.data)
            toast.success("order deleted successful!")
            refetch()
          })
    
      }
    
    
    
    
    
      if (isLoading) {
        return <Loading></Loading>
      }
  return (
    <div className='bg-base-200  w-full'>
        <div className="flex justify-between">
          {
            orders[0]?.length > 0 && <h2 className="text-2xl pt-4 pb-2 text-secondary font-semibold lg:pl-0 pl-2">Orderlist</h2>
          }

          <div className="dropdown dropdown-end lg:hidden block">
            <label tabIndex={0} className="btn m-1"><BiMenu className="text-2xl" /></label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <Link to="/dashboard"><button className="btn w-full mt-2 btn-active  btn-secondary "><BiLockAlt className='mr-2 text-xl inline' />Orderlist</button></Link>
              {
                isAdmin && <>
                  <Link to="/users"><button className="btn btn-active btn-secondary w-full mt-2"><FaUsers className='mr-2  text-xl inline' />All Users</button></Link>
                </>
              }
              {
                isAdmin && <>
                  <Link to="/services"><button className="btn btn-active w-full mt-2  btn-secondary "><AiOutlinePlus className='mr-2 text-xl inline' />Add Service</button></Link>
                </>
              }
              <Link to="/review">    <button className="btn btn-active w-full mt-2  btn-secondary "><MdOutlineReviews className='mr-2 text-xl inline' />Review</button></Link>

            </ul>
          </div>




        </div>
       {
        orders.length > 0 ?   <div className="overflow-x-auto pt-4  bg-white">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
           
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              orders?.map((order, i) => <tr>
                <td onClick={() => handleDeleteOrder(order?._id)}><TiDelete  className='text-4xl text-red-500 hover:text-red-700 hover:cursor-pointer'/></td>
                <th>{i + 1}</th>
                <td><div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={order?.img}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div></td>
                <td>{user.displayName}</td>
                <td>{user?.email}</td>
                <td>{order?.title}</td>
                <td>{order?.quantity}</td>
                <td>{order?.recentPrice}</td>
                <td>{order?.recentPrice * order?.quantity}</td>

                
              </tr>)
            }
                      

          </tbody>
          
        </table>
        <div className="bg-white flex justify-between p-2 text-lg m-2 text-secondary font-semibold  rounded-lg">
              <div className='text-xl font-bold'>Total Cost : </div>
<span className="text-xl font-bold  pr-3 md:pr-[3%]">৳ {orders?.reduce((sum , order )=> sum + (order?.recentPrice * order?.quantity) , 0)}</span>
</div>
      </div>: 
      <div className="px-8 py-6 flex justify-center text-center max-h-[500px] w-full bg-white">
      <div>
        <h1 className="text-xl font-bold my-2">
        You have not ordered any products yet. <br /> Please order the product of your choice 
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
