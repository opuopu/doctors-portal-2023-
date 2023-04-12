import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../Component/Header'
export default function DashboardLayout() {
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
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
    </div>
  )
}
