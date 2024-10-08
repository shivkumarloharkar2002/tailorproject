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
import Orders from '../Component/Orders/Orders'
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
import Ready from "../View/Readymade Details/Readymade Details"
import { ProtectedRoute } from "../protected_routes/protected_routes";
import ReadymadeForm from "../View/Admin/ReadymadeForm/ReadymadeForm";
import ViewCategory from "../View/Customer/ViewCustomers/ViewCategory";
import Update_status from "../View/AssignOrder/update_status";
import Manage_order from "../View/AssignOrder/manage_order";
import UserPerformance from "../View/Performance/UserPerformance"
import FabricFV from "../View/AllForms/FabricFV";
import ReadymadeFV from "../View/AllForms/ReadymadeFV";
import Manage from "../View/AllForms/Manage";
import CombinedPerformance from "../View/Performance/Allperformance";
import GalleryFV from "../View/AllForms/GalleryFV";
import StichForm from "../View/StritForm/StritForm";


const routes = createBrowserRouter([

  {
    path: '/',
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: '/home',
    element: (<ProtectedRoute> <Home /> </ProtectedRoute>)
  },
  {
    path: '/profile',
    element: (<ProtectedRoute> <Profile /> </ProtectedRoute>)
  },
  {
    path: '/about',
    element: <About />
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
    path: '/viewcategory/:id',
    element: <ViewCategory />
  },

  {
    path: '/order',
    element: <TodayOrder />
  },
  {
    path: '/orderslip',
    element: <Orders />
  },
  {
    path: '/gallery',
    element: <Gallery />
  },
  {
    path: '/galleryform',
    element: <GalleryForm />
  },
  {
    path: '/NextGalleryCard/:id',
    element: <NextGalleryCard />
  },
  {
    path: '/totalorders',
    element: <TotalOrderingPage />
  },

  {
    path: "/invoice",
    element: <Invoice />
  },
  {
    path: '/invoiceInfo/:id',
    element: <InvoiceInfo />
  },
  {
    path: '/readymade',
    element: <ReadyMade />
  },
  {
    path: '/ready/:id',
    element: <Ready />
  },
  {
    path: '/readymadeform',
    element: <ReadymadeForm />
  },
  {
    path: '/orderdetail',
    element: <AssignOrder />
  },
  {
    path: '/performance',
    element: <Performance />
  },
  {
    path: '/userperformance/:id',
    element: <UserPerformance />
  },
  {
    path:'/allperformance',
    element:<CombinedPerformance/>
  },
  {
    path: '/updatestatus/:id',
    element: <Update_status />
  },
  {
    path: '/manageorder',
    element: <Manage_order />
  },
  {
    path:'/fabricdetails',
    element:<FabricFV/>
  },
  {
    path:'/readymadedetails',
    element:<ReadymadeFV/>
  },
  {
    path:'/gallerydetails',
    element:<GalleryFV/>
  },
  {
    path:'/manage',
    element:<Manage/>
  },
  {
    path:'/stichform',
    element:<StichForm/>
  }
])

function CommonRoutes() {
  return <RouterProvider router={routes} />
}

export default CommonRoutes;
