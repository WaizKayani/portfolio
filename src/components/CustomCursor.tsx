import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  enabled?: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ enabled = true }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled]);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Subtle cursor ring - more decorative than functional */}
      <motion.div
        className="fixed w-12 h-12 border border-red-600 rounded-full pointer-events-none z-40 opacity-30"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5
        }}
      />
    </>
  );
};

export default CustomCursor; 