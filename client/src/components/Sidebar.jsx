import React from 'react';
import { NavLink } from 'react-router-dom';

/* SIDEBAR IMPLEMENTATION     
<div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
</div> */

const Sidebar = () => {
  return (
    <header className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
      <NavLink to = '/' className = 'w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
        <p className='blue-gradient_text'>AL</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'> 
        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-green-500'}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-green-500'}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-green-500'}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

const SidebarIcon = ({ icon }) => (
  <div className='sidebar-icon'>
    {icon}
  </div>
)

export default Sidebar;