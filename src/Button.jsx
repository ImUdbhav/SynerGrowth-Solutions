import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ text, className, variants, whileHover, whileTap, onClick }) => {

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };


  return (
    <motion.button
      onClick={onClick}
       variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
      className={className}
    >
      {text}
    </motion.button>
  );
};

export default Button;
