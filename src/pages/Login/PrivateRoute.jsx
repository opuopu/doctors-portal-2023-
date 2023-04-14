import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// RingLoader
import UseAuth from '../../context/UseAuth';
import Loading from '../Loading';


export default function PrivateRoute({children}) {
    const location = useLocation()
    const {user,loading} = UseAuth()
    if(loading){
         return <Loading></Loading>


    }
    if( user?.uid){
        return children
    }
  return <Navigate to="/login" replace state={{from:location}}  ></Navigate>
}
