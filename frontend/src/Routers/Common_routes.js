import react from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCustomer from "../View/Customer/AddCustomers/AddCustomer";
import SelectCategory from "../View/Customer/AddCustomers/SelectCategory";
import SelectFabric from "../View/Customer/AddCustomers/SelectFabric";
import Measurement from "../View/Customer/AddCustomers/Measurement";
import Login from "../View/Login/Login";
import Invoice from "../View/Invoice/Invoice";
import ViewCustomer from "../View/Customer/ViewCustomers/ViewCustomer";
import TodayOrder from "../View/TodayOrderPage/TodayOrder";
import NextOrderingPage from "../Component/OrderCard/NextOrderingPage";
import Home from "../View/Home/Home";
import Register from "../View/Register/Register";
import ReadyMade from "../View/ReadyMade/ReadyMade";
import About from '../View/About/About'
import Performance from '../View/Performance/Performance'
import FabricForm from "../View/Admin/FabricForm/FabricForm";
import Gallery from "../View/Gallery/Gallery";
import TotalOrderingPage from "../View/TotalOrderingPage/TotalOrderingPage";
import Profile from "../View/Profile/Profile";
import GalleryForm from '../View/GalleryForm/GalleryForm'
import NextGalleryCard from '../View/Gallery/NextGalleryCard'
import InvoiceInfo from '../View/InvoiceInfo/InvoiceInfo'

import AssignOrder from "../View/AssignOrder/AssignOrder";


const routes = createBrowserRouter([

  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path: '/customerinfo',
    element: <AddCustomer />
  },
  {
    path: '/selectcategory',
    element: <SelectCategory />
  },
  {
    path: '/choosefabric',
    element: <SelectFabric />
  },
  {
    path: '/fabricform',
    element: <FabricForm />
  },
  {
    path: '/addmeasurement',
    element: <Measurement />
  },

  {
    path: '/seecustomer_details',
    element: <ViewCustomer />
  },
 
  {
    path: '/order',
    element: <TodayOrder />
  },
  {
    path: '/orderslip',
    element: <NextOrderingPage />
  },

  
  {
    path: '/gallery',
    element: <Gallery />
  },
  {
    path:'/galleryform',
    element:<GalleryForm/>
  },
  {
    path:'/NextGalleryCard/:id',
    element:<NextGalleryCard/>
  },
  {
    path: '/totalorders',
    element: <TotalOrderingPage />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/invoice",
    element: <Invoice />
  },
  {
    path:'/invoiceInfo/:id',
    element:<InvoiceInfo/>
  },
  {
    path: '/readymade',
    element: <ReadyMade />
  },
  {
    path:'/performance',
    element: <Performance />
  },
  {
    path:'/orderdetail',
    element:<AssignOrder/>
  }

])

function CommonRoutes() {
  return <RouterProvider router={routes} />
}

export default CommonRoutes;
