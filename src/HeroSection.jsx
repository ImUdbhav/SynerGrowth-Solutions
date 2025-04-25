import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import bg from '/11.webp'; // Adjust the path to your image

const HeroSection = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsTextVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const navigate = useNavigate();

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 1.2 }
    }
  };

  return (
    <section className="relative h-screen flex bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: `url(${bg})`, }}
        
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: 1.1, rotate: 3 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative mt-14 z-10 text-center">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={isTextVisible ? "visible" : "hidden"}
          className="font-sans  text-[#0A1F33] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-2xl "
        >
          <motion.span variants={wordVariants}>Ignite</motion.span>{" "}
          <motion.span variants={wordVariants}>Business</motion.span>{" "}
          <motion.span variants={wordVariants}>Growth.</motion.span>{" "}
          <br />
          <motion.span variants={wordVariants}>Synergize</motion.span>{" "}
          <motion.span variants={wordVariants}>Success.</motion.span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }} // Adjust delay based on text animation
        >
        <Button
          text="Get Started"
          className="mt-8 md:mt-16 bg-[#036672] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-lg md:text-xl shadow-md hover:shadow-lg"
          onClick={() => navigate("/Contact")}
        />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
