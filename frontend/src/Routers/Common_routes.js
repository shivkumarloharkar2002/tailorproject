
import react from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddCustomer from "../View/Customer/AddCustomers/AddCustomer";
import SelectCategory from "../View/Customer/AddCustomers/SelectCategory";
import SelectFabric from "../View/Customer/AddCustomers/SelectFabric";
import Measurement from "../View/Customer/AddCustomers/Measurement";


// import Home from "../View/Home/Home"

const routes = createBrowserRouter([
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
    }
  ])

  function CommonRoutes(){
    return <RouterProvider router={routes} />
  }

  export default CommonRoutes