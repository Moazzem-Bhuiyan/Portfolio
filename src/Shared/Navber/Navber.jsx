import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navber = () => {
  const handleMenuClick = () => {
    // Close the dropdown menu after selecting a link
    const checkbox = document.getElementById('navbar-toggle');
    if (checkbox) checkbox.checked = false;
  };

  return (
    <div className="navbar bg-black bg-opacity-80 text-white flex justify-between items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <input id="navbar-toggle" type="checkbox" className="hidden" />
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
            className="menu menu-sm dropdown-content bg-white text-black text-2xl rounded-box z-[100] mt-3 w-52 p-2 shadow"
            role="menu"
          >
            <li role="menuitem">
              <NavLink to="/" onClick={handleMenuClick}>Home</NavLink>
            </li>
            <li role="menuitem">
              <NavLink to="/portfolio" onClick={handleMenuClick}>Portfolio</NavLink>
            </li>
            <li role="menuitem">
              <NavLink to="/about" onClick={handleMenuClick}>About</NavLink>
            </li>
            <li role="menuitem">
              <NavLink to="/contact" onClick={handleMenuClick}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <motion.a
          className="btn btn-ghost text-3xl"
          whileHover={{ rotate: 360 }} 
          whileTap={{ rotate: 0 }}
          href="https://www.facebook.com/moazzem.bhuiyan.37"
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          className="btn btn-ghost text-3xl"
          whileHover={{ rotate: 360 }}
          whileTap={{ rotate: 0 }}
          href="https://www.instagram.com/tiyon_bhuiyan?igsh=YzljYTk1ODg3Zg=="
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          className="btn btn-ghost text-3xl"
          whileHover={{ rotate: 360 }}
          whileTap={{ rotate: 0 }}
          href="https://github.com/Moazzem-Bhuiyan"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          className="btn btn-ghost text-3xl"
          whileHover={{ rotate: 360 }}
          whileTap={{ rotate: 0 }}
          href="https://www.linkedin.com/in/moazzem-hossen-bhuiyan-325432331/"
        >
          <FaLinkedin />
        </motion.a>
      </div>
      <div className="navbar-end hidden md:block ">
        <button className="btn btn-ghost mr-8 ml-60 btn-circle">
          <li className="text-xl">
            <NavLink to="/">Home</NavLink>
          </li>
        </button>
        <button className="btn btn-ghost btn-circle">
          <li className="text-xl">
            <NavLink to="/about">About</NavLink>
          </li>
        </button>
        <button className="btn btn-ghost ml-12 btn-circle">
          <div className="indicator">
            <li className="text-xl">
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
          </div>
        </button>
        <button className="btn btn-ghost ml-20 btn-circle">
          <div className="indicator">
            <li className="text-xl mr-10">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navber;
