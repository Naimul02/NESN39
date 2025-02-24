import React, { useContext } from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineAccountCircle, MdOutlineReviews } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { TfiMenuAlt } from 'react-icons/tfi';
import { IoMdSettings } from 'react-icons/io';
import { IoSettingsOutline } from "react-icons/io5";
import { CgPassword } from 'react-icons/cg';
import { toast } from 'react-toastify';
import { FiLogOut } from 'react-icons/fi';

const DashboardLeft = () => {
  const { user , logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  

  const handleLogOut = () => {
      logOut()
        .then(() => {
          toast.success("logout successfully !!")
        })
        .catch((error) => { 
          toast.error(error.message)
        })
    }
  return (
    <div className='flex pt-[6px] pb-[20px] lg:pb-0 lg:pt-0 flex-col mt-3 gap-3 mx-3'>
      <Link to="/dashboard/orders" className="hover:bg-slate-200 flex items-center py-1 px-3 rounded"><TfiMenuAlt className='mr-2 text-lg inline' /><span>My Orders</span></Link>
      <Link to="/dashboard/account" className="hover:bg-slate-200 flex items-center py-1 px-3 rounded"><MdOutlineAccountCircle className='mr-2 text-xl inline'/><span>My Account</span></Link>
      <Link to="/dashboard/updateProfile" className="hover:bg-slate-200 flex items-center py-1 px-3 rounded"><IoSettingsOutline className='mr-2 text-xl inline'/><span>Update Profile</span></Link>
      <Link to="/dashboard/changePassword" className="hover:bg-slate-200 flex items-center py-1 px-3 rounded"><CgPassword  className='mr-2 text-xl inline'/><span>Change Password</span></Link>
      <div onClick={handleLogOut} className="hover:cursor-pointer hover:bg-slate-200 flex items-center py-1 px-3 rounded"><FiLogOut  className='mr-2 text-xl inline'/><span>Logout</span></div>

      {
        isAdmin && <>
          <Link to="/users">All Users</Link>
        </>
      }
      {
        isAdmin && <>
          <Link to="/services"><AiOutlinePlus className='mr-2 text-xl inline' />Add Service</Link>
        </>
      }
     

    </div>
  );
};

export default DashboardLeft;