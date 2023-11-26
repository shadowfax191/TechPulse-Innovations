import {
  createBrowserRouter,

} from "react-router-dom";
import Root from "./Components/Root.jsx/Root";
import Home from "./Components/pages/Home/HOme";
import Login from "./Components/pages/page/Login";
import Register from "./Components/pages/page/Register";
import Dashboard from "./Components/pages/page/Dashboard/Dashboard";
import EmployeeList from "./Components/HR/EmployeeList";
import PrivateRoutes from "./Components/PrivateRoutes";
import HrRoute from "./Components/Routes/HRroutes";
import Details from "./Components/HR/Details";
import Progress from "./Components/HR/Progress";
import Payment from "./Components/Employee.jsx/Payment";
import Work from "./Components/Employee.jsx/Work";
import AllEmployee from "./Components/Admin/AllEmployee";
import AdminRoute from "./Components/Routes/AdminRoute";




const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

    ]

  },
  {
    path: "/logIn",
    element: <Login></Login>
  },
  {
    path: "/signIn",
    element: <Register></Register>
  },

  {
    path: "dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      // HR
      {
        path: "employee-list",
        element: <HrRoute><EmployeeList></EmployeeList></HrRoute>,
      },
      {
        path: "details/:id",
        element: <HrRoute><Details></Details></HrRoute>,

      },
      {
        path: "progress",
        element: <HrRoute><Progress></Progress></HrRoute>,

      },
      // employee
      {
        path: "payment",
        element: <Payment></Payment>,

      },
      {
        path: "work",
        element: <Work></Work>,

      },


      //Admin
      {
        path: "allEmployee",
        element: <AdminRoute><AllEmployee></AllEmployee></AdminRoute> ,

      },
    ]
  }

]);
export default routes
