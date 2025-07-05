import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RequestResume: React.FC = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    window.open('mailto:kayani.6@osu.edu?subject=Resume Request - Waiz Kayani', '_blank');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen py-16 bg-netflix-black flex flex-col items-center justify-center">
      <motion.div
        className="netflix-card max-w-2xl w-full flex flex-col items-center text-center p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Back Button */}
        <motion.button
          onClick={handleBackClick}
          className="self-start flex items-center gap-2 text-netflix-gray hover:text-white transition-colors mb-6"
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
        >
          <FaArrowLeft /> Back
        </motion.button>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 text-shadow">
            Request Resume
          </h1>
          
          <p className="text-xl text-netflix-gray mb-8 leading-relaxed">
            Thank you for your interest in my resume! 
            <br />
            Please click the button below to send me an email request.
          </p>

          <motion.button
            onClick={handleEmailClick}
            className="flex items-center gap-3 justify-center netflix-button w-full max-w-md mx-auto text-lg py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <FaEnvelope className="text-xl" />
            Request Resume via Email
          </motion.button>

          <p className="text-sm text-netflix-gray mt-6">
            I'll respond with my resume within 24 hours.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RequestResume; 