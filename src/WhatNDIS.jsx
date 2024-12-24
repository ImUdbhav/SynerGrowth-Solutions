import React from 'react';
import ndisImage from '/Ndissyne2.webp'; 

const WhatNDIS = () => {
    return (
        <div className="container mx-auto px-4 py-14">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img
                src={ndisImage}
                alt="NDIS support"
                className="w-full md:w-3/4 rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-4xl font-sans text-[#0C2340] font-bold mb-6">
                What is NDIS?
              </h1>
              <p className="text-gray-600 font-serif">
                The National Disability Insurance Scheme (NDIS) is an Australian government initiative
                that provides support for Australians with disability, their families, and carers.
                It aims to give people with disability the support they need to live a more independent
                and fulfilled life. The NDIS provides funding for necessary and reasonable support
                tailored to individual needs and goals.
              </p>
            </div>
          </div>
        </div>
      );
};

export default WhatNDIS;
