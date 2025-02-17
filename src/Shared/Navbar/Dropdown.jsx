import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { MdDeleteForever, MdOutlineShoppingCart } from 'react-icons/md';
import { FaShoppingBag } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

export const Dropdown = () => {

    const { user } = useContext(AuthContext);
  
  

    const {data: carts = [] , refetch   } = useQuery({
      queryKey : ['carts' , user?.email],
      queryFn : async() => {
       const res = await axios.get(`http://localhost:5000/carts?email=${user?.email}`)
       
    return res.data
      }
   })
  
    const handleDelete = (id) => {
      axios.delete(`http://localhost:5000/product?id=${id}`)
      .then(res => {
        console.log(res.data)
        if(res.data.deletedCount > 0){
          toast.success('Product Deleted Successfully')
          refetch()
        }
      })
      .catch(error => {
        console.log(error.message)
      })
    }



  return (
    <div>

  <div className="avatar flex  items-center gap-3">
    
            <div className="drawer w-[24px] h-[24px] drawer-end">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content w-[24px] h-[24px]">
      {/* Page content here */}
      <label htmlFor="my-drawer-4" onClick={refetch} className="drawer-button"><MdOutlineShoppingCart className="text-2xl hover:cursor-pointer text-black"/></label>
 
    </div>
    <div className="drawer-side w-[420px]">
        
      <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
  
      <ul className="menu relative bg-white text-base-content min-h-full w-[420px]  p-0">
      <div className="flex items-center justify-between bg-slate-200 p-4">
                <div className="flex items-center gap-2">
                  <FaShoppingBag className="text-xl" />
                
                <h1 className="text-xl font-bold">Shopping Cart</h1></div>
  
  
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay">
                <div className="pr-6 hover:bg-base-200 p-1 hover:cursor-pointer rounded-full">
                <RxCross2 className='text-2xl font-semibold'/>
                </div>
                </label>
                
  
      </div>
  
  
  
  <div className="overflow-y-auto max-h-[calc(100vh-4rem)] pb-8">
  
        <div>
          {
            carts?.length > 0 ? 
              carts?.map(cart => <li className=""> <div className="block  rounded-none px-4" >
                  <div className="flex justify-between w-full items-center">
                
                      <Link to={`/detailsProducts/${cart?.id}`} onClick={()=> document.getElementById('my-drawer-4').checked = false}>
                      <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay flex items-center gap-3">
                      <div className="w-16 h-16">
                    <img src={cart?.img} alt="" className='w-16 h-16 rounded-full'/>
                  </div>
                  <div>
                    <h2 className="text-sm font-bold">{cart?.title}</h2>
                    <p className="text-gray-500">Item Price : {cart?.recentPrice}</p>
                    <p className="text-sm font-semibold text-gray-500">Total Price : {cart.recentPrice} * {cart?.quantity} = ৳ {cart.recentPrice * cart?.quantity}</p>
                  </div>
                      </label>
                      </Link>
                  <div className="hover:bg-white rounded-full p-1"onClick={() => handleDelete(cart?._id)}>
                  <MdDeleteForever className="text-red-600 text-3xl"/>
                  </div>
                  </div>
                  </div>
                </li>)
             : 
            <div className="flex justify-center pt-[70px]">
             <div className=''>
             <img src="https://img.freepik.com/free-vector/removing-goods-from-basket-refusing-purchase-changing-decision-item-deletion-emptying-trash-online-shopping-app-laptop-user-cartoon-character_335657-2566.jpg" className="max-w-[200px] mx-auto max-h-[200px]" alt=""/>
  
  <div className='px-5'>
    <h1 className="text-xl font-semibold text-center">There are no products in your shopping cart.</h1>
  </div>
             </div>
  
            </div>
          }
                
        </div>
  </div>
  
  <Link to={'/checkout'} onClick={()=> document.getElementById('my-drawer-4').checked = false}>
  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay">
  <div className="hover:cursor-pointer  absolute bottom-2 w-full ">
    <div className="flex items-center justify-evenly py-2  bg-[#5fa800] mx-3 rounded-lg">
    <h2 className="text-base  text-white font-medium">Procced to checkout</h2>
  
  <div className="bg-white p-2 text-lg m-2 text-[#5fa800] font-semibold  rounded-lg">
    Total Price : <span className="text-lg font-semibold">৳</span> {carts?.reduce((sum , cart) => sum + (cart?.recentPrice * cart?.quantity) , 0)}
  </div>
    </div>
  </div>
  </label>
  </Link>
        
      </ul>
      
      
    </div>
    
  </div>
  
              
              
              <div className="w-10 rounded-full mb-1 mr-2 hidden lg:block">
                <img src={user?.photoURL} alt="" className="hidden lg:block" />
              </div>
              
            </div>
    </div>
  )
}
