import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonCardProps {
  className?: string;
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({ className = '' }) => {
  return (
    <motion.div
      className={`bg-gray-800 rounded-lg overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-video bg-gray-700 animate-pulse" />
      <div className="p-4">
        <div className="h-4 bg-gray-700 rounded animate-pulse mb-2" />
        <div className="h-3 bg-gray-700 rounded animate-pulse w-3/4" />
      </div>
    </motion.div>
  );
};

interface SkeletonRowProps {
  count?: number;
  className?: string;
}

const SkeletonRow: React.FC<SkeletonRowProps> = ({ count = 6, className = '' }) => {
  return (
    <div className={`flex gap-4 overflow-x-auto ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} className="flex-shrink-0 w-64" />
      ))}
    </div>
  );
};

export { SkeletonCard, SkeletonRow }; 