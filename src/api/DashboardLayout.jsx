import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../Component/Header'
import UseAuth from '../context/UseAuth'
import useAdmin from '../hooks/useAdmin'
export default function DashboardLayout() {
  const {user} = UseAuth()
  const {isAdmin} = useAdmin(user?.email)
  return (
    <div>
        <Header></Header>
        <div className="drawer drawer-mobile bg-[#fff]">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-start mt-10">
<Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#fff]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/Dashboard'>My Appointment</Link></li>
     { isAdmin && <li><Link to='/Dashboard/allusers'>All Users</Link></li>}
     { isAdmin && <li><Link to='/Dashboard/adddoctor'>Add Doctor</Link></li>}
    </ul>
  
  </div>
</div>
    </div>
  )
}
