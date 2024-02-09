import React from 'react';
import { NavLink } from 'react-router-dom';
import Saturn from '../assets/Icons/Planets/saturn-svg.svg'

/* SIDEBAR IMPLEMENTATION     
<div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
</div> */

const Sidebar = () => {
  return (
    <header className='header'>
      <NavLink to = '/' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-green-500'}>
        AL
      </NavLink>
      <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-green-500'}>
        About
        {/* <Saturn /> */}
        {/* <img /> */}
      </NavLink>
      <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-green-500'}>
        Projects
      </NavLink>
      <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-green-500'}>
        Contact
      </NavLink>
    </header>
  )
}

const SidebarIcon = ({ icon }) => (
  <div className='sidebar-icon'>
    {icon}
  </div>
)

export default Sidebar;