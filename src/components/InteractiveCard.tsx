import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverScale?: number;
  showOverlay?: boolean;
  overlayContent?: React.ReactNode;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  onClick,
  hoverScale = 1.05,
  showOverlay = false,
  overlayContent
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      whileHover={{ 
        scale: hoverScale,
        zIndex: 10
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {children}
      
      <AnimatePresence>
        {isHovered && showOverlay && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {overlayContent}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Netflix-style glow effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-lg shadow-2xl"
            style={{
              boxShadow: '0 0 20px rgba(229, 9, 20, 0.3)',
              zIndex: -1
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default InteractiveCard; 