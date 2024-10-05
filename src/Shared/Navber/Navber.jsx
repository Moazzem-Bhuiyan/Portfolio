// src/components/Navber.jsx

import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navber = () => {
  return (
    <div className="navbar  bg-black bg-opacity-80 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-black text-2xl rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
              <li> <NavLink to ='/'>Home </NavLink> </li>
          
            <li> <NavLink to ='/portfolio'>Portfolio </NavLink> </li>
            <li> <NavLink to ='/about'>About </NavLink> </li>
            <li> <NavLink to ='/contact'>Contact </NavLink> </li>
        
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <motion.a
          className="btn btn-ghost text-3xl"
          whileHover={{ rotate: 360 }} // Hovering will rotate the icon
          whileTap={{ rotate: 0 }} // When tapped, it will return to the original position
        >
          <a href="https://www.facebook.com/moazzem.bhuiyan.37"><FaFacebook /></a>
        </motion.a>
        <motion.a
          className="btn btn-ghost text-3xl"
          whileHover={{ rotate: 360 }}
          whileTap={{ rotate: 0 }}
        >
          <a href="https://www.instagram.com/tiyon_bhuiyan?igsh=YzljYTk1ODg3Zg== "><FaInstagram /></a>
        </motion.a>
        <motion.a
          className="btn btn-ghost text-3xl"
          whileHover={{ rotate: 360 }}
          whileTap={{ rotate: 0 }}
        >
            <a href="https://github.com/Moazzem-Bhuiyan">   <FaGithub /></a>
       
        </motion.a>
        <motion.a
          className="btn btn-ghost text-3xl"
          whileHover={{ rotate: 360 }}
          whileTap={{ rotate: 0 }}
        >
          <FaLinkedin />
        </motion.a>
      </div>
      <div className="navbar-end  ">
       <div className=' hidden md:block'>
       <button className="btn btn-ghost mr-8 btn-circle">
          <li className='text-xl'>
            <NavLink to ='/'>Home</NavLink>
          </li>
        </button>
       <button className="btn btn-ghost mr-12 btn-circle">
          <li className='text-xl'>
            <NavLink to ='/about'>About</NavLink>
          </li>
        </button>
        <button className="btn btn-ghost mr-14 btn-circle">
          <div className="indicator">
            <li className='text-xl'>
              <NavLink to='/portfolio'>Portfolio</NavLink>
            </li>
          </div>
        </button>
        <button className="btn btn-ghost mr-5 btn-circle">
          <div className="indicator">
            <li className='text-xl'>
              <NavLink to ='/contact'>Contact</NavLink>
            </li>
          </div>
        </button>
       </div>
      </div>
    </div>
  );
};

export default Navber;
