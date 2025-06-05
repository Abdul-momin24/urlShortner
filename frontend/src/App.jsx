import React from 'react'
import ShortnerPage from './pages/shortnerPage'
import LoginForm from './components/LoginForm'
import AuthPage from './pages/AuthPage'
import { Outlet } from '@tanstack/react-router'
import Navbar from './components/Navbar'

function RouteLayout() {
  return (
    <div  className=' max-w-screen'>
        <Navbar/>
       <Outlet/>
    </div>
  )
}

export default RouteLayout