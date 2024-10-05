import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../../assets/img1.png"; // Add your project images
import img2 from "../../../../assets/im2.png";
import img4 from "../../../../assets/p1.png";
import img5 from "../../../../assets/p3.png";
import img6 from "../../../../assets/im6.png";

import SectionTitle from "../../../SectionTitle/SectionTitle";

const projects = [
  { id: 1, imgSrc: img4, title: "Ecommerce Gadget website using React for the frontend and Node.js for the backend integrated with MongoDB for data storage. Implemented payment handling using Stripe API.", link: "https://form-validation-usecntx.web.app" },
  { id: 2, imgSrc: img2, title: "Hungry Horse Full, a complete e-commerce website using React for the frontend and Node.js for the backend integrated with MongoDB for data storage. Implemented payment handling using Stripe API.", link: "https://simple-firebase-fa54a.web.app/" },
  { id: 3, imgSrc: img5, title: "Restaurant Booking Frontend using React.js", link: "https://resturent-booking-c5002.web.app" },
  { id: 4, imgSrc: img1, title: "Simple Food Project Frontend using React.js", link: "https://simply-goo-food.web.app/" },
  // New project added here
  { id: 5, imgSrc: img6, title: "New Project - Blog Application using React.js and Tailwind CSS", link: "https://darkmood-and-ligthmodd-toggole-practice.vercel.app/" },
];

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="project-section">
      <SectionTitle title={'Some Of My Latest Work'} />
      <div className="grid md:grid-cols-2 bg-gray-100 lg:py-10 gap-10 lg:px-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-60 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              >
                <h3 className="text-white text-xl font-semibold">
                  {project.title}
                </h3>
              </motion.div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
