import React, { useEffect } from 'react'
import Navbar from '../../components/HotelOwner/Navbar'
import SideBar from '../../components/HotelOwner/SideBar'
import { Outlet } from 'react-router-dom'
import {useAppContext} from '../../context/AppContext.jsx'

const Layout = () => {
  const {isOwner,navigate}= useAppContext()

  useEffect(() => {
  if (!isOwner) {
    navigate('/');
  }
}, [isOwner]);
  return (
    <div className='flex flex-col h-screen'>
        <Navbar/>
        <div className='flex h-full'>
          <SideBar/>
          <div>
            <Outlet className='flex-1 p-4 pt-10 md:px-10 h-full'/> 
          </div>
        </div>
        
    </div>
  )
}

export default Layout