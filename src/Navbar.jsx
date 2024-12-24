import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '/Syner.png'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 shadow-lg fixed  w-full z-50 top-0 font-roboto-slab ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="flex items-center justify-between h-24"> 
          <img src={Logo} alt="Logo" className='w-[150px] max-lg:w-[120px] '  />
          <div className="hidden md:flex  space-x-24">
            {/* <a href="#" className="text-white hover:bg-teal-950 hover:text-white px-3 py-2 rounded-md text-base font-bold" onClick={closeMenu}>
              Home
            </a> */}
            <NavLink to="/" end className="text-white hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-base font-bold" onClick={closeMenu}>
            Home
            </NavLink>
            <NavLink to="/services" className="text-white hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-base font-bold" onClick={closeMenu}>
            Services
            </NavLink>
            <NavLink to="/contact" className="text-white hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-base font-bold" onClick={closeMenu}>
            Contact
            </NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-700 focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden rounded-lg bg-gray"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink to="/" end className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-teal-800" onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to="/services" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-teal-800" onClick={closeMenu}>
                Services
              </NavLink>
              <NavLink to="/contact" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-teal-800" onClick={closeMenu}>
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
