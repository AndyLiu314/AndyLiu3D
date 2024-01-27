import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
      <NavLink to = '/' className = ' '>

      </NavLink>
    </div>
  )
}

const SidebarIcon = ({ icon }) => (
  <div className='sidebar-icon'>
    {icon}
  </div>
)

export default Sidebar