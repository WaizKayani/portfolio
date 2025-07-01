import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-netflix-black flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Hero Section */}
      <motion.div
        className="w-full max-w-3xl text-center z-10"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text mb-4 text-shadow">
          Waiz Kayani
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-netflix-light-gray mb-6 font-medium leading-relaxed">
          A Computer Science student at The Ohio State University specializing in Artificial Intelligence. I've built at the intersection of innovation and impact through roles at Apple and FirstEnergy, and as the founder of Kiani ATM Solutions. From AI-powered media authentication to immersive spatial apps for Apple Vision Pro, I love creating technology that makes a difference. I'm currently seeking Summer 2026 Software Engineering internships where I can continue building scalable, user-centered solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-8">
          <a href="mailto:kayani.6@osu.edu" className="netflix-button text-sm sm:text-base" aria-label="Email">
            <FaEnvelope className="inline mr-2" /> Email
          </a>
          <a href="https://www.linkedin.com/in/waiz-k-713101227/" className="netflix-button text-sm sm:text-base" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="inline mr-2" /> LinkedIn
          </a>
          <a href="https://github.com/WaizKayani" className="netflix-button text-sm sm:text-base" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="inline mr-2" /> GitHub
          </a>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 mt-4">
          <button onClick={() => navigate('/skills')} className="netflix-button bg-netflix-dark-gray hover:bg-netflix-hover text-sm sm:text-base py-2 sm:py-3">Skills</button>
          <button onClick={() => navigate('/projects')} className="netflix-button bg-netflix-dark-gray hover:bg-netflix-hover text-sm sm:text-base py-2 sm:py-3">Projects</button>
          <button onClick={() => navigate('/work-experience')} className="netflix-button bg-netflix-dark-gray hover:bg-netflix-hover text-sm sm:text-base py-2 sm:py-3">Experience</button>
          <button onClick={() => navigate('/blogs')} className="netflix-button bg-netflix-dark-gray hover:bg-netflix-hover text-sm sm:text-base py-2 sm:py-3">Leadership</button>
          <button onClick={() => navigate('/contact-me')} className="netflix-button bg-netflix-dark-gray hover:bg-netflix-hover text-sm sm:text-base py-2 sm:py-3 col-span-2 sm:col-span-1">Contact</button>
        </div>
      </motion.div>
      {/* Netflix-style background gradient */}
      <div className="absolute inset-0 bg-netflix-gradient pointer-events-none z-0" />
    </div>
  );
};

export default Home; 