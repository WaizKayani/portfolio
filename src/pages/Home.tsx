import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-netflix-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Hero Section */}
      <motion.div
        className="w-full max-w-3xl text-center z-10"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold gradient-text mb-4 text-shadow">
          Waiz Kayani
        </h1>
        <p className="text-xl md:text-2xl text-netflix-light-gray mb-6 font-medium">
          Software Engineer & Entrepreneur | AI, iOS, and Full Stack Development
        </p>
        <p className="mb-8 text-lg text-netflix-gray max-w-2xl mx-auto">
          I'm a Computer Science student at The Ohio State University, specializing in Artificial Intelligence. Experienced at Apple, FirstEnergy, and as founder of Kiani ATM Solutions. Passionate about building impactful products—like Deepfake Detection AI, FocusSpace Vision Pro, and scalable inventory systems.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="mailto:kayani.6@osu.edu" className="netflix-button" aria-label="Email">
            <FaEnvelope className="inline mr-2" /> Email
          </a>
          <a href="https://www.linkedin.com/in/waiz-k-713101227/" className="netflix-button" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="inline mr-2" /> LinkedIn
          </a>
          <a href="https://github.com/WaizKayani" className="netflix-button" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="inline mr-2" /> GitHub
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a href="#skills" className="netflix-button bg-netflix-dark-gray hover:bg-netflix-hover">Skills</a>
          <a href="#projects" className="netflix-button bg-netflix-dark-gray hover:bg-netflix-hover">Projects</a>
          <a href="#experience" className="netflix-button bg-netflix-dark-gray hover:bg-netflix-hover">Experience</a>
          <a href="#leadership" className="netflix-button bg-netflix-dark-gray hover:bg-netflix-hover">Leadership</a>
          <a href="#contact" className="netflix-button bg-netflix-dark-gray hover:bg-netflix-hover">Contact</a>
        </div>
      </motion.div>
      {/* Netflix-style background gradient */}
      <div className="absolute inset-0 bg-netflix-gradient pointer-events-none z-0" />
    </div>
  );
};

export default Home; 