import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet className='h-screen' />
    <Footer/>
    </>
  )
}

export default Layout