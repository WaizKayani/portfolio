import React from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

interface AppLoaderProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const AppLoader: React.FC<AppLoaderProps> = ({ isLoading, children }) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <motion.div
      className="fixed inset-0 bg-netflix-black flex flex-col items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Personalized logo animation */}
      <motion.div
        className="mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-netflix-red">
          Waiz Kayani
        </h1>
      </motion.div>

      {/* Loading spinner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <LoadingSpinner size="lg" />
      </motion.div>

      {/* Loading text */}
      <motion.p
        className="text-netflix-gray mt-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Loading the portfolio...
      </motion.p>

      {/* Shimmer effect */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-netflix-red to-transparent shimmer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      />
    </motion.div>
  );
};

export default AppLoader; 