import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToCart from "../Pages/AddToCart/AddToCart";
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
        path: '/cart',
        element: <AddToCart></AddToCart>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/services',
        element: <AdminRoute><AddService></AddService></AdminRoute>
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
      }

    ]
  }

])
export default Router