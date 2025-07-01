import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUtensils, FaTv, FaCode, FaBriefcase, FaUsers, FaBook, FaBasketballBall, FaCircle, FaGamepad } from 'react-icons/fa';

const hobbies = [
  {
    title: "Working Out",
    icon: <FaDumbbell className="text-3xl" />,
    description: "Fitness enthusiast who enjoys staying active and maintaining a healthy lifestyle.",
    color: "from-red-500 to-red-700"
  },
  {
    title: "Exploring Various Cuisines",
    icon: <FaUtensils className="text-3xl" />,
    description: "Food lover who enjoys trying different cuisines and culinary experiences.",
    color: "from-orange-500 to-orange-700"
  },
  {
    title: "Watching TV Shows",
    icon: <FaTv className="text-3xl" />,
    description: "Big fan of Netflix shows and entertainment content.",
    color: "from-purple-500 to-purple-700"
  },
  {
    title: "Developing Software Projects",
    icon: <FaCode className="text-3xl" />,
    description: "Passionate about building projects like this Netflix-style portfolio and FocusSpace app.",
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Running the Business",
    icon: <FaBriefcase className="text-3xl" />,
    description: "Entrepreneurial spirit managing Kiani ATM Solutions and exploring business opportunities.",
    color: "from-green-500 to-green-700"
  },
  {
    title: "Leading Student Organizations",
    icon: <FaUsers className="text-3xl" />,
    description: "President of Punjabi Student Association, showing cultural engagement and event planning skills.",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    title: "Reading About New Technologies",
    icon: <FaBook className="text-3xl" />,
    description: "Focused on Machine Learning and Explainable AI research to stay current with tech trends.",
    color: "from-teal-500 to-teal-700"
  },
  {
    title: "Playing Basketball",
    icon: <FaBasketballBall className="text-3xl" />,
    description: "Team sports enthusiast who enjoys basketball and staying active.",
    color: "from-pink-500 to-pink-700"
  },
  {
    title: "Playing Cricket",
    icon: <FaCircle className="text-3xl" />,
    description: "Traditional sport lover who enjoys cricket and strategic gameplay.",
    color: "from-yellow-500 to-yellow-700"
  },
  {
    title: "Playing Billiards",
    icon: <FaGamepad className="text-3xl" />,
    description: "Precision and strategy game enthusiast who enjoys billiards.",
    color: "from-gray-500 to-gray-700"
  }
];

const Hobbies: React.FC = () => {
  return (
    <div className="min-h-screen py-16 bg-netflix-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold gradient-text mb-10 text-center text-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Hobbies & Interests
        </motion.h1>
        
        <motion.p 
          className="text-xl text-netflix-light-gray text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Beyond my professional pursuits, here are the activities and interests that keep me engaged and balanced.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className="netflix-card p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${hobby.color} flex items-center justify-center text-white mb-4 mx-auto`}>
                {hobby.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {hobby.title}
              </h3>
              <p className="text-netflix-light-gray text-center text-sm leading-relaxed">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-netflix-gray text-lg">
            These diverse interests help me maintain a well-rounded perspective and bring creativity to my professional work.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hobbies; 