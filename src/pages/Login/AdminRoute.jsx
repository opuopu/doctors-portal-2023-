import { Navigate } from 'react-router-dom';
import UseAuth from '../../context/UseAuth';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Loading';

export default function AdminRoute({children}) {
    const {user,loading} = UseAuth() 
    console.log(user?.email)
    const {isAdmin,isadminloading} = useAdmin(user?.email)
    console.log(isAdmin)
    if(isadminloading || loading){
        return <Loading></Loading>


   }
    if(user && isAdmin){
        return children
    }
  return (
    <Navigate to="/">  </Navigate>
  )
}
