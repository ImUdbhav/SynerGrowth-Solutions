import React from 'react';
import imgtop from '/building.webp';

const Intro = () => {
  return (
    <div className="container mx-auto px-3 py-14">
      <div className="flex flex-col md:flex-col md:items-start">
        <div className="w-full flex flex-col md:flex-row mb-8">
          <div className="md:w-1/2 mb-8 mr-0 md:ml-[1rem] md:mb-0">
            <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-[#0C2340] font-sans mb-6 tracking-tight leading-tight">
              Synergrowth
              Solutions:<br /><span className='text-teal-700'> 
              Empowering Your<br />
              Business Growth
              </span>
            </h1>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center mr-0 md:mr-1 md:pl-8">
            <p className="text-gray-600 text-lg mb-12 font-serif leading-relaxed mt-2">
              At Synergrowth Solutions, we are a leading NDIS business support
              agency in Australia. Our consultancy services encompass accounting,
              operational management, and HR support to help businesses thrive.
            </p>
            <div className="flex">
              <div className="mr-16">
                <p className="text-5xl font-bold text-teal-700">150+</p>
                <p className="text-sm text-gray-600">Trust Us</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-teal-700">15</p>
                <p className="text-sm text-gray-600">
                  Professional Business<br />Support
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img
            src={imgtop}
            alt="Business professionals collaborating"
            className="w-[90vw] rounded-lg shadow-lg h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
