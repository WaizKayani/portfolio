import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaJava, FaGithub, FaDocker } from 'react-icons/fa';
import { SiFastapi, SiMongodb, SiNumpy, SiPytorch, SiOpencv, SiTensorflow, SiCss3, SiHtml5, SiJavascript, SiSwift, SiApple, SiGit, SiSpring, SiMysql } from 'react-icons/si';
import InteractiveCard from '../components/InteractiveCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { SkeletonRow } from '../components/SkeletonLoader';

const projects = [
  {
    title: 'Deepfake Detection and Media Authentication Agent',
    description:
      'AI system to detect deepfake content in audios and videos using CNNs, RNNs, and transformer-based models. FastAPI backend with structured logging and MongoDB Atlas for scalable media analysis. React.js dashboard styled with Tailwind CSS and CSS3 to display detection results and media authenticity scores.',
    tech: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'HuggingFace', icon: <FaPython /> },
      { name: 'OpenCV', icon: <SiOpencv /> },
      { name: 'Docker', icon: <FaDocker /> },
    ],
    github: 'https://github.com/WaizKayani/deepfake-detection-system',
  },
  {
    title: 'FocusSpace (Vision Pro App)',
    description:
      'Spatial productivity app for Apple Vision Pro that transforms task management into an immersive experience. Built with SwiftUI, RealityKit, and AVFoundation. Features spatial to-do list, Pomodoro timer, and ambient sound control, plus gesture-based UI for seamless mixed reality interaction.',
    tech: [
      { name: 'Swift', icon: <SiSwift /> },
      { name: 'RealityKit', icon: <SiApple /> },
      { name: 'AVFoundation', icon: <SiApple /> },
      { name: 'Apple Reality Composer Pro', icon: <SiApple /> },
      { name: 'visionOS SDK', icon: <SiApple /> },
    ],
    github: 'https://github.com/WaizKayani/FocusSpace',
  },
  {
    title: 'Clothing Inventory Management System',
    description:
      'Java-based system to manage 1,000+ apparel items with real-time tracking and dynamic pricing logic. Modular features for sorting, searching, and formatting item data. Utilized Java Collections, OOP, and encapsulation for flexibility, accuracy, and extensibility.',
    tech: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Java Collections', icon: <FaJava /> },
      { name: 'OOP', icon: <FaJava /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
    github: 'https://github.com/WaizKayani/Clothing-Inventory-Management-System',
  },
  {
    title: 'Kiani ATM Solutions',
    description:
      'Founded an ATM company in 2024, entering the $25B+ ATM market. Built and deployed the company website using HTML, CSS, JavaScript, and GitHub, strengthening the online presence. Managed revenue-sharing models and maximized profitability across current and future partner sites.',
    tech: [
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss3 /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Git', icon: <SiGit /> },
    ],
    github: 'https://github.com/WaizKayani/kianiatmsolutions',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Projects: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen py-16 bg-netflix-black flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-10 text-shadow">Featured Projects</h2>
        <div className="w-full max-w-6xl">
          <SkeletonRow count={3} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" />
        </div>
      </div>
    );
  }

  return (
    <div id="projects" className="min-h-screen py-16 bg-netflix-black flex flex-col items-center">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold gradient-text mb-10 text-shadow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.1 }}
          >
            <InteractiveCard
              className="netflix-card flex flex-col h-full justify-between shadow-lg"
              hoverScale={1.03}
              showOverlay={true}
              overlayContent={
                <div className="text-center">
                  <FaGithub className="text-4xl text-white mx-auto mb-2" />
                  <p className="text-white font-semibold">View on GitHub</p>
                </div>
              }
              onClick={() => window.open(project.github, '_blank')}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-netflix-gray mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <motion.span 
                      key={tech.name} 
                      className="flex items-center gap-1 bg-netflix-dark-gray text-white px-3 py-1 rounded-full text-xs font-medium"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span className="text-lg">{tech.icon}</span> {tech.name}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-2">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="netflix-button flex items-center justify-center gap-2 w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </InteractiveCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
