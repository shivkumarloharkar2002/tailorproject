import react from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCustomer from "../View/Customer/AddCustomers/AddCustomer";
import SelectCategory from "../View/Customer/AddCustomers/SelectCategory";
import SelectFabric from "../View/Customer/AddCustomers/SelectFabric";
import Measurement from "../View/Customer/AddCustomers/Measurement";
import Login from "../View/Login/Login";
import Invoice from '../View/Invoice/Invoice'
import ViewCustomer from "../View/Customer/ViewCustomers/ViewCustomer";
import TodayOrder from "../View/TodayOrderPage/TodayOrder";
import NextOrderingPage from "../Component/OrderCard/NextOrderingPage";
import Home from "../View/Home/Home";
<<<<<<< HEAD
import Register from "../View/Register/Register";
import ReadyMade from "../View/ReadyMade/ReadyMade";
import About from '../View/About/About'
import Performance from '../View/Performance/Performance'
import FabricForm from "../View/Admin/FabricForm/FabricForm";
import Gallery from "../View/Gallery/Gallery";
import TotalOrderingPage from "../View/TotalOrderingPage/TotalOrderingPage";
=======
>>>>>>> 2dc594bd6b43bb17590a9a80bfa9815405e1964d




const routes = createBrowserRouter([
  
  {
    path:'/',
    element:<Login/>
  },
  {
   path:'/home',
   element:<Home/>
  },
    {
      path:'/customerinfo',
      element:<AddCustomer/>
    },
    {
      path:'/seecustomer_details',
      element:<ViewCustomer/>
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
      path:'/fabricform',
      element:<FabricForm/>
    },
    {
      path:'/measurement',
      element:<Measurement/> 
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
    path:'/gallery',
    element:<Gallery/>
   },
   {
    path:'/totalorders',
    element:<TotalOrderingPage/>
   },

<<<<<<< HEAD
=======
      path:'/login',
      element:<Login/>
    },
>>>>>>> 2dc594bd6b43bb17590a9a80bfa9815405e1964d
    {
      path: "/register",
      element: <Register/>
    },
  
    {
      path: "/invoice",
      element: <Invoice/>
    },
 {
  path:'/readymade',
  element:<ReadyMade/>
 }

  ])

  function CommonRoutes(){
    return <RouterProvider router={routes} />
  }

export default CommonRoutes;
