import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToCart from "../Pages/AddToCart/AddToCart";
import AddService from "../Pages/Dasboard/AddService";
import Dashboard from "../Pages/Dasboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import Signup from "../Signup/Signup";

import Review from "../Pages/Services/Review/Review";
import Users from "../Pages/AllUsers/Users";
import AdminRoute from "./AdminRoute";
import Contact from "../Pages/Contact/Contact";
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
        path: '/addingservice',
        element: <Services></Services>
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

    ]
  }

])
export default Router