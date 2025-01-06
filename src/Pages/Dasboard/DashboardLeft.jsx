import React, { useContext } from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineReviews } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const DashboardLeft = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div className='lg:block hidden'>
      <Link to="/dashboard"><button className="btn w-full mt-2 ml-2 btn-active  btn-secondary "><BiLockAlt className='mr-2 text-xl inline' />Orderlist</button></Link>
      {
        isAdmin && <>
          <Link to="/users"><button className="btn btn-active btn-secondary w-full mt-2 ml-2"><FaUsers className='mr-2  text-xl inline' />All Users</button></Link>
        </>
      }
      {
        isAdmin && <>
          <Link to="/services"><button className="btn btn-active w-full mt-2  btn-secondary ml-2 "><AiOutlinePlus className='mr-2 text-xl inline' />Add Service</button></Link>
        </>
      }
      <Link to="/review">    <button className="btn btn-active w-full mt-2 ml-2 btn-secondary "><MdOutlineReviews className='mr-2 text-xl inline' />Review</button></Link>

    </div>
  );
};

export default DashboardLeft;