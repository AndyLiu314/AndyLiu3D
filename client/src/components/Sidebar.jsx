import React from 'react';
import { NavLink } from 'react-router-dom';
import Saturn from '../assets/Icons/Planets/saturn-svg.svg'
import Earth from '../assets/Icons/Planets/planet-earth-svg.svg'
import Mars from '../assets/Icons/Planets/mars-svg.svg'
import Jupiter from '../assets/Icons/Planets/jupiter-svg.svg'

/* SIDEBAR IMPLEMENTATION     
<div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
</div> */

const Sidebar = () => {
  return (
    <header className='header'>
      <NavLink to = '/' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-green-500'}>
        <SidebarIcon icon={Earth} />
      </NavLink>
      <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-green-500'}>
        <SidebarIcon icon={Mars} />
      </NavLink>
      <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-green-500'}>
        <SidebarIcon icon={Jupiter} />
      </NavLink>
      <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-green-500'}>
      <SidebarIcon icon={Saturn} />
      </NavLink>
    </header>
  )
}

const SidebarIcon = ({ icon }) => (
  <div className='sidebar-icon'>
    <img src={icon} />
  </div>
)

export default Sidebar;