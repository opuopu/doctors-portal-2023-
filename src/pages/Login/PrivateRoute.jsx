import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
// RingLoader
import UseAuth from '../../context/UseAuth';


export default function PrivateRoute({children}) {
    const location = useLocation()
    const {user,loading} = UseAuth()
    if(loading){
         return <div className='flex justify-center mt-16 '><RingLoader
         color="#19D3AE"
         size={100}
       /></div>


    }
    if( user?.uid){
        return children
    }
  return <Navigate to="/login" replace state={{from:location}}  ></Navigate>
}
