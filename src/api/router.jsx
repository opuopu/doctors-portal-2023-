import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Appointment from "../pages/appointment/Appointment";
import Main from "./Main";


export const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
       {path:'/',element:<Home/>},
       {path:"/Appointment",element:<Appointment/>}
    ]}
])