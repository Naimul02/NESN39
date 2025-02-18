import React, { useContext } from 'react';
import DashboardLeft from './DashboardLeft';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../Loading/Loading';
import { BiMenu, BiLockAlt } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineReviews } from 'react-icons/md';
import axios from 'axios'

import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

import { TiDelete } from 'react-icons/ti';
import { toast } from 'react-toastify';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);



  return (
    <div>
      <Navbar></Navbar>

    <div className='flex flex-col lg:flex-row lg:pt-[130px]'>
      <div className='bg-base-200  pt-3 w-full lg:w-[290px] pr-5'>
        <DashboardLeft></DashboardLeft>
      </div>
      <div className='w-full'>
        <Outlet></Outlet>
      </div>
      
    </div >
    <Footer></Footer>
    </div>
  );
};

export default Dashboard;