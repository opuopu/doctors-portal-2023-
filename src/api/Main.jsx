import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import Header from '../Component/Header'

export default function Main() {
  return (
    <div> 
      <Header/>
      <Outlet/>
    <Footer/>

    </div>
  )
}
