import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const ContactMe: React.FC = () => {
  return (
    <div id="contact" className="min-h-screen py-16 bg-netflix-black flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-10 text-shadow">Contact Me</h2>
      <motion.div
        className="netflix-card max-w-xl w-full flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col gap-4 mb-6 w-full">
          <a href="mailto:kayani.6@osu.edu" className="flex items-center gap-3 justify-center netflix-button w-full" aria-label="Email">
            <FaEnvelope className="text-xl" /> kayani.6@osu.edu
          </a>
          <a href="tel:+17408799843" className="flex items-center gap-3 justify-center netflix-button w-full" aria-label="Phone">
            <FaPhone className="text-xl" /> (740) 879-9843
          </a>
          <a href="https://www.linkedin.com/in/waiz-k-713101227/" className="flex items-center gap-3 justify-center netflix-button w-full" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
          <a href="https://github.com/WaizKayani" className="flex items-center gap-3 justify-center netflix-button w-full" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-xl" /> GitHub
          </a>
        </div>
        <p className="text-netflix-gray text-sm">Feel free to reach out for collaboration, opportunities, or just to connect!</p>
      </motion.div>
    </div>
  );
};

export default ContactMe;
