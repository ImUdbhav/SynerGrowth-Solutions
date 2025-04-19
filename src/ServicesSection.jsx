
import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardCheck, FaUserTie, FaChartLine, FaCog, FaCalendarAlt, FaHandsHelping } from 'react-icons/fa';

const services = [
  {
    title: 'Compliance Services',
    icon: <FaClipboardCheck className="text-teal-700 w-12 h-12 mb-4" />,
    details: [
      'Compliance audits and assessments',
      'Policy development and implementation',
      'Pre-audit checks and preparations',
      'Employee relations and fair work safeguards',
      'Training and workshops on compliance best practices',
    ],
  },
  {
    title: 'Accounting and Financial Management Services',
    icon: <FaChartLine className="text-teal-700 w-12 h-12 mb-4" />,
    details: [
      'Bookkeeping and financial reporting',
      'Payroll processing and management',
      'Budgeting and forecasting',
      'Tax planning and compliance',
      'Invoice management and debtor chasing',
    ],
  },
  {
    title: 'HR Services',
    icon: <FaUserTie className="text-teal-700 w-12 h-12 mb-4" />,
    details: [
      'Recruitment and onboarding assistance',
      'Performance management and appraisals',
      'Employee relations and conflict resolution',
      'Training and development programs',
      'Mentorship programs for staff development',
    ],
  },
  
  {
    title: 'Operational Support',
    icon: <FaCog className="text-teal-700 w-12 h-12 mb-4" />,
    details: [
      'Day-to-day management guidance',
      'Process optimization and workflow improvements',
      'Stakeholder management',
      'Operational restructuring',
      'Chain of command implementation for operational excellence',
    ],
  },
  {
    title: 'Events and Workshops',
    icon: <FaCalendarAlt className="text-teal-700 w-12 h-12 mb-4" />,
    details: [
      'Organizing free events and workshops for NDIS providers',
      'Topics may include compliance training, HR best practices, financial management, etc.',
      'Providing valuable resources and networking opportunities for participants',
    ],
  },
  {
    title: 'Mentorship Programs',
    icon: <FaHandsHelping className="text-teal-700 w-12 h-12 mb-4" />,
    details: [
      'Offering mentorship programs for NDIS providers',
      'Pairing experienced mentors with mentees to provide guidance and support',
      'Helping mentees navigate challenges and achieve their goals in the NDIS sector',
    ],
  },
];

const cardVariants = {
    offscreen: {
      y: 80,
      opacity: 0,
      scale: 0.95,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.9,
      },
    },
  };
  
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };
  
  const hoverVariants = {
    hover: {
      y: -8,
      rotateZ: -1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };
  
  const ServicesSec = () => {
    return (
      <section className="py-24 px-4 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 ">
        <div className="container mx-auto px-2 lg:px-8">
        <div className="text-center mb-24 overflow-hidden">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent mb-4 font-sans"
  >
    NDIS Business Support
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeIn", delay: 0.3 }}
    className="text-lg text-slate-600 max-w-2xl mx-auto font-serif"
  >
    Comprehensive solutions tailored for NDIS providers to enhance compliance, operations, and growth.
  </motion.p>
</div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 border border-slate-200/80 hover:border-teal-100"
                initial="offscreen"
                whileInView="onscreen"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <motion.div
                  variants={hoverVariants}
                  className="absolute inset-0 bg-gradient-to-br from-white to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-6 flex justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      delay: 0.2,
                      stiffness: 150,
                      damping: 10 
                    }}
                  >
                    <motion.div 
                      className="p-4 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg shadow-sm"
                      whileHover={{
                        scale: 1.05,
                        rotateZ: [0, -2, 2, -2, 0],
                        transition: { 
                          duration: 0.6,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      {React.cloneElement(service.icon, { 
                        className: "text-white w-8 h-8",
                      })}
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-semibold text-slate-800 mb-6 text-center font-sans"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start text-slate-600 font-serif"
                        variants={listItemVariants}
                        initial="hidden"
                        animate="visible"
                        custom={idx}
                      >
                        <motion.svg
                          className="flex-shrink-0 w-5 h-5 text-teal-600 mt-1 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ 
                            delay: idx * 0.08 + 0.3,
                            duration: 0.4,
                            ease: "easeInOut"
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </motion.svg>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default ServicesSec;