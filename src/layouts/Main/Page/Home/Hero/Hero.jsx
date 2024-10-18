import React from 'react';
import { motion } from 'framer-motion';
import img from '../../../../../assets/kuyf.jpg';
import { CiSaveDown2 } from 'react-icons/ci';
import AnimationForHero from '../../../../../BackGroundAnimation/animationforhero';
import resume from '../../../../../assets/finalresume.pdf'

const Hero = () => {
  return (
    <div className='relative hero h-[550px] bg-zinc-100 text-black p-5 overflow-hidden'>
      <AnimationForHero /> {/* Add the background animation here */}

      <div className='grid md:grid-cols-2 gap-5 items-center relative z-10'>
        <motion.div className='flex justify-center'>
          <motion.img
            className='w-full h-auto max-w-[250px] lg:max-w-[300px] max-h-[300px] object-cover rounded-full border-4 border-transparent transition-all duration-300 hover:shadow-xl'
            src={img}
            alt="Your Name"
            whileHover={{
              scale: 1.1,
              rotateY: 15, 
              rotateX: 5,  
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)" 
            }}
            whileTap={{ scale: 0.9 }} 
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
            className='text-5xl font-bold mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {["Hi,", "I'm",  "Moazzem", "Bhuiyan"].map((word, index) => (
              <span
                key={index}
                className='hover:text-blue-500 transition-colors duration-300'
                onMouseEnter={(e) => e.target.style.color = 'red'}
                onMouseLeave={(e) => e.target.style.color = ''}
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
                onMouseEnter={(e) => e.target.style.color = 'red'}
                onMouseLeave={(e) => e.target.style.color = ''}
              >
                {word}{" "}
              </span>
            ))}
          </motion.p>

          {/* Add the resume download button */}
          <a href={resume} download="Moazzem_Bhuiyan_Resume.pdf">
            <motion.button
              className='btn bg-black rounded-full px-6 py-3 text-lg text-white'
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ duration: 0.3 }}
            >
              <CiSaveDown2 className='text-2xl font-bold' />Resume
            </motion.button>
          </a>

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
