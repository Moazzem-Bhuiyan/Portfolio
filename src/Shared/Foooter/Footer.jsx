import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import bk from '../../assets/bk.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black bg-opacity-80 text-white p-6">
      <div className="container mx-auto text-center">
        {/* Back to Top Button */}
        <motion.button 
          onClick={scrollToTop} 
          className="mb-4 p-2 bg-blue-500 hover:bg-blue-700 rounded transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
         <img className='w-10 -mt-20' src={bk} alt="" />
        </motion.button>

        <h3 className="text-lg font-bold mb-2">Stay Connected With Us</h3>
        <p className="mb-4">Follow us on social media:</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">

            <i className="h-8 text-3xl w-8 transition-transform duration-300 hover:scale-110"> <FaFacebook></FaFacebook> </i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="h-8 text-3xl w-8 transition-transform duration-300 hover:scale-110"> <FaInstagram></FaInstagram> </i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="h-8 text-3xl w-8 transition-transform duration-300 hover:scale-110"> <FaLinkedin></FaLinkedin> </i>
          </a>
        </div>
        <p>© 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
