import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const testimonials = [
  {
    id: 1,
    name: 'Jon Whitfield',
    position: 'CEO, Tech Solutions Inc.',
    text:
      'Working with our company, they provided exceptional services that transformed our operations and compliance management. Highly recommended!',
  },
  {
    id: 2,
    name: 'Emma Larkins',
    position: 'HR Manager, Innovate Corp.',
    text:
      'Their HR services were instrumental in enhancing our recruitment processes and employee development. A trusted partner for growth.',
  },
  {
    id: 3,
    name: 'David Brown',
    position: 'CFO, Finance Group Ltd.',
    text:
      'Their financial management services enabled us to streamline our financial processes and achieve better budget control. Excellent service!',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0C2340] mb-16">What our Clients say</h2>
          <div className="space-y-16 md:space-y-20 ">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={testimonialVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative"
              >
                <FaQuoteLeft className="text-teal-500 text-3xl md:text-4xl absolute -top-6 left-6" />
                <p className="text-sm md:text-base text-gray-700 mb-4">{testimonial.text}</p>
                <div className="mt-4 md:mt-6">
                  <p className="font-bold text-sm md:text-base text-[#0C2340]">{testimonial.name}</p>
                  {/* <p className="text-gray-600">{testimonial.position}</p> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
