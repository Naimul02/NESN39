import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import DashboardLeft from './DashboardLeft';
import { useQuery } from '@tanstack/react-query'
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { BiMenu, BiLockAlt } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineReviews } from 'react-icons/md';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
const AddService = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { isLoading } = useQuery({
    queryKey: '',
    queryFn: ''
  })
  if (isLoading) {
    <Loading></Loading>
  }

  const onSubmit = data => {
    console.log(data)
    fetch('https://departmental-store-server.vercel.app/addservice', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('service add successfully !!')
      })
  }

  return (
    <>

      <div className='row mr-0'>
        <div className='col-2 bg-base-200 pt-2'>
          <DashboardLeft></DashboardLeft>
        </div>


        <div className="col-10 bg-base-200">
          <div className="flex justify-between">
            <h2 className="text-2xl py-2 text-secondary font-semibold">Add Service</h2>
            <div className="dropdown dropdown-end lg:hidden block">
              <label tabIndex={0} className="btn m-1"><BiMenu className="text-3xl" /></label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <Link to="/dashboard"><button className="btn w-full mt-2 btn-active  btn-secondary "><BiLockAlt className='mr-2 text-xl' />Orderlist</button></Link>
                {
                  isAdmin && <>
                    <Link to="/users"><button className="btn btn-active btn-secondary w-full mt-2"><FaUsers className='mr-2  text-xl' />All Users</button></Link>
                  </>
                }
                {
                  isAdmin && <>
                    <Link to="/services"><button className="btn btn-active w-full mt-2  btn-secondary "><AiOutlinePlus className='mr-2 text-xl' />Add Service</button></Link>
                  </>
                }
                <Link to="/review">    <button className="btn btn-active w-full mt-2  btn-secondary "><MdOutlineReviews className='mr-2 text-xl' />Review</button></Link>

              </ul>
            </div>


          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white  p-6 mr-2">

            <div className="lg:flex">
              {/* register your input into the hook by invoking the "register" function */}
              <div className="mr-10">
                <h2 className="text-lg font-semibold mb-1">Product Name</h2>
                <input type="text" {...register("productName")} placeholder="Enter ProductName" className="input input-bordered lg:w-96" />
                <br />
                <h2 className="text-lg font-semibold mt-2">Description</h2>
                <textarea {...register("description")} placeholder="Enter Your Description" description="description" className="input input-bordered lg:w-96 h-28 pt-2"></textarea>
                <br />
              </div>
              {/* include validation with required or other standard HTML validation rules */}
              <div className='mt-2'>
                <h2 className="text-lg font-semibold">Image</h2>
                <input type="text" {...register("photoURL")} placeholder="Upload Image" className="input input-bordered input-secondary bg-pink-100 text-secondary" />
                <br />
                {/* errors will return when field validation fails  */}
                <h2 className="text-lg font-semibold mt-2">Price</h2>
                <input placeholder="Price" type="text"{...register("price")} className="Enter Price input input-bordered" />
              </div>
            </div>


            <input type="submit" className="btn btn-secondary mt-4 px-10  mb-20" />


          </form>
        </div>
      </div>
    </>
  );
};

export default AddService;