import { Outlet } from '@tanstack/react-router';
import Navbar from './components/Navbar'

import React from 'react';
function RouteLayout() {
  return (
    <div  className=' max-w-screen'>
    <Navbar/>
    <Outlet/>
    </div>
  )
}

export default RouteLayout