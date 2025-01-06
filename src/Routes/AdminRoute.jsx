import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import { Navigate } from 'react-router-dom'
import Loading from '../Pages/Loading/Loading';

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  console.log(isAdmin)

  if (isAdminLoading) {
    return <Loading></Loading>
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login"></Navigate>


};

export default AdminRoute;