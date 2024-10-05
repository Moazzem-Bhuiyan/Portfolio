// src/components/Hero.jsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import img from '../../../../../assets/kuyf.jpg';
import { CiSaveDown2 } from 'react-icons/ci';

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCursorPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='hero h-[550px] bg-zinc-100 text-black p-5'>
      <div className='grid md:grid-cols-2 gap-5 items-center'>
        
        <motion.div
          className='flex justify-center'
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.img
            className='w-full h-auto max-w-[250px] lg:max-w-[300px] max-h-[300px] object-cover rounded-full border-4 border-transparent transition-all duration-300 hover:shadow-xl'
            src={img}
            alt="Your Name"
            style={{
              translate: `${cursorPosition.x * 0.02}px ${cursorPosition.y * 0.02}px`,
            }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ duration: 0.3 }}
            initial={{ borderColor: '#4A90E2' }}
            whileHover={{
              borderColor: '#FF5733',
              scale: 1.15,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>

        <motion.div
          className='text-center md:text-left'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className='text-4xl font-bold mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {["Hi,", "I'm", "Your", "Moazzem", "Bhuiyan"].map((word, index) => (
              <span
                key={index}
                className='hover:text-blue-500 transition-colors duration-300'
                onMouseEnter={(e) => e.target.style.color = 'red'} // Change color on hover
                onMouseLeave={(e) => e.target.style.color = ''} // Reset color on leave
              >
                {word}{" "}
              </span>
            ))}
          </motion.h1>
          
          <motion.p
            className='mt-4 mb-6 text-xl'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {["I'm", "a", "passionate", "web", "developer", "focused", "on", "creating", "amazing", "digital", "experiences."].map((word, index) => (
              <span
                key={index}
                className='hover:text-blue-500 transition-colors duration-300'
                onMouseEnter={(e) => e.target.style.color = 'red'} // Change color on hover
                onMouseLeave={(e) => e.target.style.color = ''} // Reset color on leave
              >
                {word}{" "}
              </span>
            ))}
          </motion.p>
          
          <motion.button
            className='btn bg-black rounded-full px-6 py-3 text-lg text-white'
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ duration: 0.3 }}
          >
            <CiSaveDown2 className='text-2xl font-bold' />Resume
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
