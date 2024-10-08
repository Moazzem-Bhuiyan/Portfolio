import React from 'react';
import { motion } from 'framer-motion';
import me from "../../../../assets/me1.jpg";
import SkillsSection from '../../../../Shared/Skill/Skill';
import './About.css'; // Import the CSS file for background animation
import { FaUserGraduate } from 'react-icons/fa';

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

      {/* Education Section  */}

      <SkillsSection />

      <div className='my-20'>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
    <FaUserGraduate className='text-2xl' />
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">2020</time>
      <div className="text-lg font-black">Passed SSC(Secondary School Certificate)</div>
      I have successfully passed the Secondary School Certificate (SSC) examination,
       achieving a GPA of 4.76.
       This milestone reflects my dedication and hard work throughout my academic journey.
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
    <FaUserGraduate className='text-2xl' />
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">2024</time>
      <div className="text-lg font-black">Studying at "Diploma in Engineering"</div>
      I am currently pursuing a diploma in Computer Science and Engineering (CSE) and am in my 8th semester.
       This course is helping me strengthen my skills and knowledge in the field of technology.
    </div>
    <hr />
  </li>
</ul>

      </div>
 
    </div>
  );
};

export default About;
