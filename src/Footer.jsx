import React from 'react';
import { FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-8 md:px-8 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between md:items-center space-y-10 md:space-y-0">
          {/* Brand and Logo */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">SynerGrowth Solutions</h2>
            <p className="text-sm text-gray-400">Empowering NDIS providers with top-notch solutions and support.</p>
          </div>
          <div className="flex justify-center space-x-8">
            <NavLink to="/" className="text-gray-400 hover:text-white transition">Home</NavLink>
            <NavLink to="/services" className="text-gray-400 hover:text-white transition">Services</NavLink>
            <NavLink to="/contact" className="text-gray-400 hover:text-white transition">Contact</NavLink>
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/synergrowth_solutions?igsh=MTUwa2g5dGJld3FmNg==" className="text-gray-400 hover:text-white transition">
              <FaInstagram alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61559530374154" className="text-gray-400 hover:text-white transition">
              <FaFacebook alt="Facebook" className="h-6 w-6" />
            </a>
            {/* <a href="#" className="text-gray-400 hover:text-white transition">
              <FaSquareXTwitter alt="Twitter" className="h-6 w-6" />
            </a> */}
          </div>
        </div>
        <div className="mt-8 text-center md:text-left space-y-2">
          {/* <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaPhone />
            <p className="text-gray-400">0416 857 754</p>
          </div> */}
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <MdEmail />
            <p className="text-gray-400">info@synergrowthsolutions.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SynerGrowth Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
