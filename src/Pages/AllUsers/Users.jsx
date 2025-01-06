import React, { useContext } from 'react';
import DashboardLeft from '../Dasboard/DashboardLeft';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast'
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { BiMenu, BiLockAlt } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineReviews } from 'react-icons/md';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
const Users = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  const { isLoading, data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('https://departmental-store-server.vercel.app/users')
      const data = await res.json()
      return data
    }
  })
  if (isLoading) {
    return <Loading></Loading>
  }

  const handleMakeAdmin = (id) => {
    fetch(`https://departmental-store-server.vercel.app/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('shoptoken')}`
      }

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          toast.success('Make Admin Successful !!')
          refetch();

        }
      })
  }

  return (
    <div className='row mr-0'>
      <div className='col-2 bg-base-200 pl-5 pb-2 pt-2'>
        <DashboardLeft></DashboardLeft>
      </div>
      <div className='col-10  bg-base-200 pt-2'>
        <div className="flex justify-between">
          <h2 className="text-2xl py-2 text-secondary font-semibold">All Users</h2>
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
        <div className="overflow-x-auto bg-white">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                users?.map((user, i) => <tr>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user?.photourl} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>

                      </div>
                    </div>
                  </td>
                  <td>{user?.email}</td>
                  <td>{
                    user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-active btn-secondary btn-sm">Make Admin</button>
                  }</td>
                  <td><button className='btn btn-sm btn-danger'>DELETE</button></td>
                </tr>)
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;