import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../pages/Login/Login";
import PrivateRoute from "../pages/Login/PrivateRoute";
import Signup from "../pages/Signup/Signup";
import Appointment from "../pages/appointment/Appointment";
import Main from "./Main";


export const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
       {path:'/',element:<Home/>},
       {path:"/Appointment",element:<PrivateRoute><Appointment></Appointment></PrivateRoute>},
       {path:'/login',element:<Login/>},
       {path:'/signup',element:<Signup/>}
    ]}
])