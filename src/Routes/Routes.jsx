import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import AddService from "../Pages/Dasboard/AddService";
import Dashboard from "../Pages/Dasboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Signup/Signup";

import Review from "../Pages/Services/Review/Review";
import Users from "../Pages/AllUsers/Users";
import AdminRoute from "./AdminRoute";
import Contact from "../Pages/Contact/Contact";
import DetailsProducts from "../Pages/DetailsProduct/DetailsProduct";
import CategoriesProducts from "../Pages/CategoriesProducts/CategoriesProducts"
import Checkout from "../Pages/Checkout/Checkout";
import { MyAccount } from "../Pages/Dasboard/MyAccount/MyAccount";
import { MyOrders } from "../Pages/Dasboard/MyOrders/MyOrders";
import { UpdateProfile } from "../Pages/Dasboard/UpdateProfile/UpdateProfile";
import { ChangePassword } from "../Pages/Dasboard/ChangePassword/ChangePassword";
const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      
      
      
      {
        path: '/review',
        element: <Review></Review>
      },
      {
        path: '/users',
        element: <AdminRoute><Users></Users></AdminRoute>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path:'/detailsProducts/:id',
        element: <DetailsProducts></DetailsProducts>
      },
      {
        path : '/categoriesProducts/:category',
        element : <CategoriesProducts></CategoriesProducts>
      },
      {
        path : '/checkout',
        element : <Checkout></Checkout>
      },
      {
        path: '/account',
        element : <MyAccount></MyAccount>
      }

    ]
  }
,
// dashboard
  {
    path: '/dashboard',
    element : <Dashboard></Dashboard>,
    children : [
      {
        path: '/dashboard/orders',
        element : <MyOrders></MyOrders>
      },
      ,
      {
        path : '/dashboard/account',
        element : <MyAccount></MyAccount>
      },
      {
        path: '/dashboard/updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/dashboard/changePassword',
        element : <ChangePassword></ChangePassword>
      }
    ]
  }

])
export default Router