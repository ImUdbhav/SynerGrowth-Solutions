import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { FaHandshake } from "react-icons/fa6";
import { FaCompass } from "react-icons/fa";                         
import { FaRocket } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const ValueProp = () => {
  const navigate = useNavigate();
  return (
    <section className="py-12 bg-gradient-to-r  from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-[2rem] md:text-4xl font-bold text-[#0C2340] mb-12 text-center">Why Choose Us</h2>
        <p className="text-lg mb-12 text-center text-gray-600 leading-relaxed">
          At SynerGrowth Solutions, we're committed to empowering NDIS providers and driving positive change in the disability sector. Here's why you should partner with us:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">
              <FaHandshake  className="w-16 h-16 text-teal-700"/>
              
            </div>
            <p className="text-center text-gray-600 font-semibold mb-2">Personalized Approach</p>
            <p className="text-sm text-center text-gray-600">We understand that every NDIS provider is unique. That's why we tailor our solutions to meet your specific needs and goals.</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">
              <FaCompass className="w-16 h-16  text-teal-700"/>
              
            </div>
            <p className="text-center text-gray-600 font-semibold mb-2">Expert Guidance</p>
            <p className="text-sm text-center text-gray-600">Our team of experienced consultants provides expert guidance and support every step of the way, ensuring your success in the NDIS sector.</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">
            <FaRocket  className="w-16 h-16  text-teal-700"/>
            </div>
            <p className="text-center text-gray-600 font-semibold mb-2">Innovative Solutions</p>
            <p className="text-sm text-center text-gray-600">We stay ahead of the curve by embracing innovation and adopting cutting-edge strategies to drive positive outcomes for our clients.</p>
          </motion.div>
        </div>
        <div className="text-center mt-8">
          <Button
            text="Partner With Us"
            onClick={() => navigate("/Contact")}
            className="font-serif bg-[#0C2340] text-white px-8 py-4 rounded-full font-bold text-lg shadow-md hover:shadow-lg mt-5"
          />
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
