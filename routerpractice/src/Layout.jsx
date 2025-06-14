
import React from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
