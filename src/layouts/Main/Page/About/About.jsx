import React from 'react';
import { motion } from 'framer-motion';
import me from "../../../../assets/me1.jpg";
import SkillsSection from '../../../../Shared/Skill/Skill';
import './About.css'; // Import the CSS file for background animation

const About = () => {
  // Animation variants for the text and image
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="about-section">
      {/* 3D Background Animation */}
      <div className="background-animation"></div>

      <div className="grid gap-20 md:grid-cols-2 p-5 items-center relative z-10">
        <div className="flex pt-20 justify-center">
          <motion.img
            className="w-[400px]"
            src={me}
            alt="Me"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl underline font-bold mb-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-xl"
          >
            My name is Moazzem Hossen, and I'm a MERN stack developer from
            Bangladesh. I'm passionate about web development, striving to create
            user-friendly features. I'm dedicated to ensuring smooth
            functionality by diligently addressing bugs and errors, aiming for
            perfection in every project. My goal is to craft engaging user
            experiences through intuitive interfaces, focusing on usability and
            satisfaction.
          </motion.p>
        </div>
      </div>

      <SkillsSection />
    </div>
  );
};

export default About;
