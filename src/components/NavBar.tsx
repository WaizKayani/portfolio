import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../images/logo.png';

const navLinks = [
  { name: 'Home', to: '/home' },
  { name: 'Skills', to: '/skills' },
  { name: 'Projects', to: '/projects' },
  { name: 'Experience', to: '/work-experience' },
  { name: 'Leadership', to: '/blogs' },
  { name: 'Contact', to: '/contact-me' },
];

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-netflix-black/90 backdrop-blur-md shadow-md border-b border-netflix-dark-gray"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/browse" className="flex items-center gap-2">
          <img src={logo} alt="Waiz Kayani Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold text-netflix-red tracking-wide">Waiz Kayani</span>
        </Link>
        <div className="flex gap-2 md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md font-semibold text-white transition-all duration-200 hover:bg-netflix-red/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-netflix-red focus:ring-opacity-50 ${
                location.pathname === link.to ? 'bg-netflix-red text-white' : 'text-netflix-light-gray'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
