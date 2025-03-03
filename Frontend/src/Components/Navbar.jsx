import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full">
      <div className="logo">
        <Link to="/">
          <img src="https://res.cloudinary.com/dzsvjyg2c/image/upload/v1738649519/cinn4jbfs4fpl6uq9tqn.png" alt="Convict Logo" className="w-[120px] h-auto" />
        </Link>
      </div>
      <div className="flex gap-5 text-[1.3rem] m-0 p-0">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/internship" className="hover:underline">Internship</Link>
        <Link to="/job" className="hover:underline">Job</Link>
        <Link to="/aboutus" className="hover:underline">About Us</Link>
        <Link to="/contactus" className="hover:underline">Contact Us</Link>
      </div>

      <div className='pr-[10px]'>
        <Link to="/login" className=" text-black text-[1.3rem]  hover:underline ">
          Log in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
