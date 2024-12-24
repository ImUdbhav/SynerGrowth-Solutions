import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

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
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        duration: 0.9
      }
    }
  };

  return (
    <section className="bg-cover bg-center bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 h-screen px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center align-middle justify-center h-full">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={isTextVisible ? "visible" : "hidden"}
          className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-teal-800 text-center mt-12 md:mt-20"
        >
          <motion.span variants={wordVariants}>Ignite</motion.span>{" "}
          <motion.span variants={wordVariants}>Business</motion.span>{" "}
          <motion.span variants={wordVariants}>Growth.</motion.span>{" "}
          <br />
          <motion.span variants={wordVariants}>Synergize</motion.span>{" "}
          <motion.span variants={wordVariants}>Success.</motion.span>
        </motion.h1>
        <Button
          text="Get Started"
          className="font-serif mt-8 md:mt-12 bg-[#0C2340] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-lg md:text-xl shadow-md hover:shadow-lg"
          onClick={() => navigate("/Contact")}
        />
      </div>
    </section>
  );
};

export default HeroSection;
