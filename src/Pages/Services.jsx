import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import services from '../servicesData';
import WhatNDIS from '../WhatNDIS';



const heroTextVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
      staggerChildren: 0.4,
      
    },
  },
};

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   },
// };

const ServicesPage = () => {
  const navigate = useNavigate();
  return (
    <div>

      <section className="bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 text-white px-4 py-20 md:px-8 md:py-28 mt-5">
        <div className="container mx-auto text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={heroTextVariants}
            className="text-4xl md:text-5xl font-sans font-bold mt-12 mb-6 text-white"
          >
            Our Services
          </motion.h1>
          <p
            
            className="text-lg md:text-xl mt-7 mb-12"
          >
            Empowering NDIS providers with top-notch solutions and support.
          </p>
          <Button
            text="Contact Us"
            onClick={() => navigate("/Contact")}
            className="bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg shadow-md hover:shadow-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-20">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">What We Offer</h2> */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: true }}
                // variants={cardVariants}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                <div className="relative md:w-1/3">
                  <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
                </div>
                <div className="p-6 md:p-12 md:w-2/3">
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-[#0C2340] mb-4">{service.title}</h3>
                  <p className="text-gray-700 font-serif mb-4">{service.description}</p>
                  <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-600 font-serif">
                    {service.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatNDIS/>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C2340] mb-12">Get In Touch</h2>
          <p className="text-base md:text-lg mb-12 text-gray-600 leading-relaxed">
            Ready to elevate your business with our services? Contact us today to get started.
          </p>
          <Button
            text="Contact Us"
            onClick={() => navigate("/Contact")}
            className="bg-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-md hover:shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
