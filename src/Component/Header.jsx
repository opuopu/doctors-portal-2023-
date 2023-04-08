import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="navbar bg-white-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Appointment'>Appointment</Link></li>
          <li><Link to='/about'>About us</Link></li>
          <li><Link to='/review'>Review now</Link></li>
      
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
          <li><Link to='/Appointment'>Appointment</Link></li>
          <li><Link to='/about'>About us</Link></li>
          <li><Link to='/review'>Review now</Link></li>
          <li><Link to='/contact'>Contact us</Link></li>
          <li><Link to='/login'>Login</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn bg-secondary1 border-0 text-white-400">Get started</a>
    </div>
  </div>
  )
}
