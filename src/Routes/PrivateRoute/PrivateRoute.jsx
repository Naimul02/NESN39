import React from 'react'
import  { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Pages/Loading/Loading';


export const PrivateRoute = ({children}) => {
    const { user , loading } = useContext(AuthContext)
    const location = useLocation();
    console.log("location : " , location)
    
      if(loading){
        return <Loading></Loading>
      }
      if (user) {
        return children;
      }
      return <Navigate to="/login" state={location?.pathname}></Navigate>
  
}

export default PrivateRoute;