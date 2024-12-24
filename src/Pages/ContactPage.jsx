import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook ,FaPhone} from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { FaSquareXTwitter } from "react-icons/fa6";
import Form from '../Form';


const heroVariants = {
  
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

const ContactPage = () => {
  
  return (
    <div>
      <section className="bg-[#0C2340] text-white px-4 py-20 md:px-8 md:py-28 min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              className="text-5xl mt-10 md:mt-0 font-sans md:text-6xl font-bold mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroVariants}
              className="space-y-6 mr-12"
            >
              <div className="bg-white font-serif bg-opacity-10 rounded-lg p-6 px-7">
                <h3 className="text-2xl  font-bold mb-2"><MdEmail/></h3>
                <p className='text-lg md:text-xl'>info@synergrowthsolutions.com</p>
              </div>
              {/*   */}
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/synergrowth_solutions?igsh=MTUwa2g5dGJld3FmNg==" className="bg-white bg-opacity-10 p-4 rounded-full">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61559530374154" className="bg-white bg-opacity-10 p-4 rounded-full">
                  <FaFacebook  className="h-6 w-6" />
                </a>
                {/* <a href="#" className="bg-white bg-opacity-10 p-4 rounded-full">
                  <FaSquareXTwitter className="h-6 w-6" />
                </a> */}
              </div>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={formVariants}
            className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 md:p-12"
          >
            <Form/>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C2340] text-center mb-12">Our Location</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#0C2340]">Visit Us</h3>
              <p className="text-gray-700 mb-4">557A Maroondah Hwy, Croydon VIC 3136, Australia</p>
            
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.78642363307!2d145.25471067530071!3d-37.795044732967455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63a68ccb09e11%3A0x614e6224f7e30000!2s557A%20Maroondah%20Hwy%2C%20Croydon%20VIC%203136%2C%20Australia!5e0!3m2!1sen!2sin!4v1718616626677!5m2!1sen!2sin"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                className="rounded-lg"
                loading="lazy" 
              ></iframe>
            </div>
            <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#0C2340]">Office Hours</h3>
              <p className="text-gray-700 mb-4">Monday - Friday: 9am - 6pm</p>
              <p className="text-gray-700">Saturday: 10am - 4pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
