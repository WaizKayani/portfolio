import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaUniversity } from 'react-icons/fa';

const Leadership: React.FC = () => {
  return (
    <div id="leadership" className="min-h-screen py-16 bg-netflix-black flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-10 text-shadow">Leadership & Organizations</h2>
      <motion.div
        className="netflix-card max-w-2xl w-full flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <FaUsers className="text-3xl text-netflix-red" />
          <span className="text-xl font-semibold text-white">President</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <FaUniversity className="text-lg text-netflix-gray" />
          <span className="text-netflix-light-gray">Punjabi Students Association at Ohio State</span>
        </div>
        <span className="text-sm text-netflix-gray mb-4">12/2024–Present</span>
        <ul className="list-disc text-left ml-6 text-sm text-white space-y-2">
          <li>Lead a 6-member executive board and manage $5,000+ in funding, scaling PSA's active membership from 40 to 200+ through high-impact cultural programming and outreach.</li>
          <li>Organized 10+ high-engagement events, boosting average attendance 5x and establishing PSA as a top-growing org on campus.</li>
          <li>Improved planning workflows and logistics, reducing event prep time by 40% and boosting internal team coordination.</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Leadership;
