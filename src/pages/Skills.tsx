import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaSwift, FaJs, FaReact, FaNodeJs, FaDatabase, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaLinux, FaTerminal } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiFastapi, SiC, SiDotnet, SiTypescript, SiPytorch } from 'react-icons/si';

const skills = [
  {
    category: 'Languages & Frameworks',
    items: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'C', icon: <SiC /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Swift', icon: <FaSwift /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Unix', icon: <FaLinux /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Assembly X86', icon: <FaTerminal /> },
      { name: 'NumPy', icon: <FaPython /> },
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'Hugging Face Transformers', icon: <FaReact /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: '.NET', icon: <SiDotnet /> },
    ],
  },
  {
    category: 'Technical Concepts',
    items: [
      { name: 'Artificial Intelligence', icon: <FaReact /> },
      { name: 'Machine Learning', icon: <FaReact /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Databases', icon: <FaDatabase /> },
      { name: 'Object Oriented Programming', icon: <FaReact /> },
      { name: 'Complexity Analysis', icon: <FaReact /> },
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Skills: React.FC = () => {
  return (
    <div id="skills" className="min-h-screen py-16 bg-netflix-black flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-10 text-shadow">Technical Skills</h2>
      <div className="w-full max-w-5xl flex flex-col gap-12">
        {skills.map((group, idx) => (
          <div key={group.category}>
            <h3 className="text-2xl font-semibold text-netflix-light-gray mb-6 pl-2">{group.category}</h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {group.items.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="netflix-card flex flex-col items-center justify-center text-center p-6 cursor-pointer hover:scale-105 transition-transform"
                  variants={card}
                >
                  <div className="text-4xl mb-3 text-netflix-red drop-shadow-lg">{skill.icon}</div>
                  <span className="font-semibold text-lg text-white">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
