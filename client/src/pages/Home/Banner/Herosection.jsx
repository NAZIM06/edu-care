import React from 'react';

const Herosection = () => {
  return (
    <div className='w-full bg-[#263B5E] text-white min-h-screen flex items-center justify-center'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center mr-4 px-8 py-8'>
        {/* Text Content */}
        <div className='w-full lg:w-1/2 mb-6 lg:mr-6 flex flex-col items-center lg:items-start'>
          <div className="flex items-center mb-4">
            <div className="h-1 w-8 bg-red-600 mr-3"></div>
            <span className="uppercase font-semibold">Expert Instruction</span>
          </div>
          <div className='mb-7 text-center lg:text-left'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Online Coaching <br /> Lessons Remote <br /> Learning
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
            <span className="bg-[#FF1949] text-white px-6 py-2.5 rounded-md text-sm font-semibold">Category:</span>
            <span className="bg-[#FF1949] text-white px-6 py-2.5 rounded-md text-sm font-semibold">Wordpress</span>
            <span className="bg-[#FF1949] text-white px-6 py-2.5 rounded-md text-sm font-semibold">Web Design</span>
            <span className="bg-[#FF1949] text-white px-6 py-2.5 rounded-md text-sm font-semibold">Marketing</span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center ">
          <img src="https://i.ibb.co/YL9WXvp/gallery-02-1340px.jpg" alt="Online Coaching" className="rounded-lg shadow-lg w-full md:w-2/3 lg:w-4/5 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
