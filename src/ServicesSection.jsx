
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
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.7,
      duration: 0.8,
    },
  },
};

const ServicesSection = () => {
  return (
    <section className="py-16  bg-gradient-to-r from-slate-100 via-slate-200   to-slate-300 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-[2rem] md:text-4xl font-bold font-sans text-[#0C2340] text-center mb-12">NDIS Business Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white  p-6 rounded-lg shadow-lg transform transition hover:scale-105"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}

            >
              <div className="flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-sans text-gray-900 text-center mb-6">{service.title}</h3>
              <ul className="list-disc font-serif list-inside space-y-3 text-gray-600 text-left">
                {service.details.map((detail, idx) => (
                  <li className='font-serif' key={idx}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
