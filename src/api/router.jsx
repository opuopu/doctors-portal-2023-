import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import AddDoctor from "../pages/Dashboard/Adddoctor/AddDoctor";
import Allusers from "../pages/Dashboard/Allusers";
import Dashboard from "../pages/Dashboard/Dashboard";
import AdminRoute from "../pages/Login/AdminRoute";
import Login from "../pages/Login/Login";
import PrivateRoute from "../pages/Login/PrivateRoute";
import Signup from "../pages/Signup/Signup";
import Appointment from "../pages/appointment/Appointment";
import DashboardLayout from "./DashboardLayout";
import Main from "./Main";


export const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
       {path:'/',element:<Home/>},
       {path:"/Appointment",element:<PrivateRoute><Appointment></Appointment></PrivateRoute>},
       {path:'/login',element:<Login/>},
       {path:'/signup',element:<Signup/>}
    ]},
    {
        path:'/Dashboard',element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {path:'/Dashboard',element:<Dashboard></Dashboard>},
            {path:'/Dashboard/allusers',element:<AdminRoute><Allusers/></AdminRoute>},
            {path:'/Dashboard/adddoctor',element:<AdminRoute><AddDoctor/></AdminRoute>},
         
        ]
    }
])