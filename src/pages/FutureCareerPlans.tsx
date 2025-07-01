import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaChess, FaParachuteBox, FaHorse, FaCar, FaChartLine, FaRocket } from 'react-icons/fa';

const shortTermGoals = [
  {
    title: "SWE Internship",
    icon: <FaBriefcase className="text-3xl" />,
    description: "Secure a software engineering internship for summer 2026 to gain real-world experience.",
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Complete CS Degree",
    icon: <FaGraduationCap className="text-3xl" />,
    description: "Graduate with a Computer Science degree from The Ohio State University.",
    color: "from-green-500 to-green-700"
  },
  {
    title: "Learn Chess",
    icon: <FaChess className="text-3xl" />,
    description: "Master the strategic game of chess to enhance analytical thinking skills.",
    color: "from-purple-500 to-purple-700"
  },
  {
    title: "Skydiving",
    icon: <FaParachuteBox className="text-3xl" />,
    description: "Experience the thrill of skydiving and conquer fears through adventure.",
    color: "from-red-500 to-red-700"
  },
  {
    title: "Learn Horseback Riding",
    icon: <FaHorse className="text-3xl" />,
    description: "Develop equestrian skills and connect with nature through horseback riding.",
    color: "from-orange-500 to-orange-700"
  }
];

const longTermGoals = [
  {
    title: "Big Tech SWE",
    icon: <FaBriefcase className="text-3xl" />,
    description: "Work as a software engineer at a major technology company.",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    title: "Dream Car",
    icon: <FaCar className="text-3xl" />,
    description: "Purchase my dream car as a symbol of hard work and achievement.",
    color: "from-pink-500 to-pink-700"
  },
  {
    title: "Investment Portfolio",
    icon: <FaChartLine className="text-3xl" />,
    description: "Build a diverse investment portfolio for long-term financial security and growth.",
    color: "from-teal-500 to-teal-700"
  },
  {
    title: "Build More Startups",
    icon: <FaRocket className="text-3xl" />,
    description: "Launch and scale multiple successful startup ventures beyond Kiani ATM Solutions.",
    color: "from-yellow-500 to-yellow-700"
  }
];

const FutureCareerPlans: React.FC = () => {
  return (
    <div className="min-h-screen py-16 bg-netflix-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold gradient-text mb-10 text-center text-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Future Career Plans
        </motion.h1>
        
        <motion.p 
          className="text-xl text-netflix-light-gray text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My roadmap for personal and professional growth, from immediate goals to long-term aspirations.
        </motion.p>

        {/* Short Term Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Short Term Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortTermGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                className="netflix-card p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${goal.color} flex items-center justify-center text-white mb-4 mx-auto`}>
                  {goal.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {goal.title}
                </h3>
                <p className="text-netflix-light-gray text-center text-sm leading-relaxed">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Long Term Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Long Term Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {longTermGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                className="netflix-card p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${goal.color} flex items-center justify-center text-white mb-4 mx-auto`}>
                  {goal.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {goal.title}
                </h3>
                <p className="text-netflix-light-gray text-center text-sm leading-relaxed">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <p className="text-netflix-gray text-lg">
            These goals drive my daily actions and keep me focused on building the future I envision.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FutureCareerPlans; 