import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full">
      <div className="logo">
        <NavLink to="/">
          <img src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1738649519/cinn4jbfs4fpl6uq9tqn.png" alt="Convict Logo" className="w-[120px] h-auto" />
        </NavLink>
      </div>
      <div className="flex gap-5 text-[1.3rem] m-0 p-0">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "font-bold underline" : "hover:underline"}
        >
          Home
        </NavLink>
        <NavLink 
          to="/internship" 
          className={({ isActive }) => isActive ? "font-bold underline" : "hover:underline"}
        >
          Internship
        </NavLink>
        <NavLink 
          to="/job" 
          className={({ isActive }) => isActive ? "font-bold underline" : "hover:underline"}
        >
          Job
        </NavLink>
        <NavLink 
          to="/aboutus" 
          className={({ isActive }) => isActive ? "font-bold underline" : "hover:underline"}
        >
          About Us
        </NavLink>
        <NavLink 
          to="/contactus" 
          className={({ isActive }) => isActive ? "font-bold underline" : "hover:underline"}
        >
          Contact Us
        </NavLink>
      </div>

      <div className='pr-[10px]'>
        <NavLink 
          to="/login" 
          className={({ isActive }) => isActive ? "text-black font-bold underline" : "text-black hover:underline"}
        >
          Log in
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
