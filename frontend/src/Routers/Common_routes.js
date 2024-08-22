
import react from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddCustomer from "../View/Customer/AddCustomers/AddCustomer";
import SelectCategory from "../View/Customer/AddCustomers/SelectCategory";
import SelectFabric from "../View/Customer/AddCustomers/SelectFabric";
import Measurement from "../View/Customer/AddCustomers/Measurement";
import Login from "../View/Login/Login";
import OrderCard from "../Component/OrderCard/OrderCard";
import ViewCustomer from "../View/Customer/ViewCustomers/ViewCustomer";
import TodayOrder from "../View/TodayOrderPage/TodayOrder";
import NextOrderingPage from "../Component/OrderCard/NextOrderingPage";
import Home from "../View/Home/Home";



const routes = createBrowserRouter([
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/customerinfo',
      element:<AddCustomer/>
    },
    {
      path:'/selectcategory',
      element:<SelectCategory/>
    },
    {
      path:'/choosefabric',
      element:<SelectFabric/>
    },
    {
      path:'/measurement',
      element:<Measurement/>
    },
    {
      path: '/seecustomer_details',
      element: <ViewCustomer/>
    },
    {
      path:'/order',
      element:<TodayOrder/>
    },
    {
      path:'/orderslip',
      element:<NextOrderingPage/>
    },
    {
      path:'/',
      element:<Home/>
    }
  ])

  function CommonRoutes(){
    return <RouterProvider router={routes} />
  }

  export default CommonRoutes