import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle/SectionTitle';

const skills = {
  expertise: [
    { name: 'Tailwind CSS', logo: 'https://i.ibb.co/Lh9bJyc/tailwind.png' },
    { name: 'Material Tailwind', logo: 'https://i.ibb.co/qDCGV5G/bb13aeb51c54421a7a5540a7132895dc.png' },
    { name: 'React JS', logo: 'https://i.ibb.co/6nHYCSv/react-logo-7-B3-CE81517-seeklogo-com.png' },
    { name: 'JavaScript', logo: 'https://i.ibb.co/BCsNTLv/images-2.png' },
    { name: 'React Router Dom', logo: 'https://i.ibb.co/pvDJXK4/1-uw-SAzkma-JGFf-0-Gmv-TTZRQ.png' },
  ],
  comfortable: [
    { name: 'Node JS', logo: 'https://i.ibb.co/0szyc9x/1-Jr3-NFSKTf-QWRUyjbl-BSKeg.png' },
    { name: 'Mongoose', logo: 'https://i.ibb.co/0tyLbyQ/images-1.png' },
    { name: 'Tanstack Query', logo: 'https://i.ibb.co/Q99Lw91/react-query-logo-1340-EA4-CE9-seeklogo-com.png' },
    { name: 'Git (GitHub)', logo: 'https://i.ibb.co/hg4Mc5T/11104255.png' },
  ],
  basic: [
    { name: 'Firebase', logo: 'https://i.ibb.co/2hFwZL5/logo-vertical.png' },
    { name: 'Json Web Token', logo: 'https://i.ibb.co/gSvFbYM/jwt-logo-65-D86-B4640-seeklogo-com.png' },
    { name: 'Stripe', logo: 'https://i.ibb.co/JxKtZV8/Stripe-Emblem.png' },
  ],
};

const SkillsSection = () => {
  return (
    <div className="my-skills-section bg-white text-black p-6 md:p-8 lg:p-10">
      <SectionTitle title={'My Skills'} />

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl mb-4 capitalize text-center">{category}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {items.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex items-center justify-center p-4 border border-gray-700 rounded-md min-w-[150px] md:min-w-[200px] transition-transform duration-200 perspective"
                initial={{ opacity: 0, scale: 0.8, rotateY: 20 }} // Initial position with rotation for 3D effect
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}   // Final position without rotation
                transition={{ duration: 0.3 }}                     // Animation duration
                whileHover={{ scale: 1.1, rotateY: -5 }}          // Scale and rotate slightly on hover
                whileTap={{ scale: 0.95, rotateY: 5 }}            // Scale and rotate slightly on tap
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-12 w-12 rounded-full md:h-16 md:w-16"
                />
                <span className="ml-2 text-sm md:text-base">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
