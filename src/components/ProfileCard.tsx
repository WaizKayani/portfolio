import React from 'react';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, image, onClick }) => {
  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer group"
      whileHover={{ scale: 1.08, boxShadow: '0 0 0 4px #E50914' }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`Select profile: ${name}`}
    >
      <div className="rounded-full overflow-hidden border-4 border-transparent group-hover:border-netflix-red transition-all duration-200 w-28 h-28 md:w-36 md:h-36 shadow-lg">
        <img src={image} alt={`${name} profile`} className="object-cover w-full h-full" />
      </div>
      <h3 className="mt-3 text-white text-lg font-semibold capitalize tracking-wide text-shadow drop-shadow-md">
        {name}
      </h3>
    </motion.div>
  );
};

export default ProfileCard;
