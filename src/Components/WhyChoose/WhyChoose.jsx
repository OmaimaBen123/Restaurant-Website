import React from 'react';
import { FaBus } from 'react-icons/fa'; // Corrected import

const WhyChoose = () => {
  return (
    <>
      <div className="py-14 md:py-28 bg-gray-50">
        <div className="container">
          <h1 className="text-2xl text-dark font-semibold text-center tracking-wider pb-16">
            Why Choose Us
          </h1>
        </div>

        {/* Card section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
          {/* First card */}
        <div className="text-center flex flex-col gap-1 px-2">
            <p className="text-dark/70 font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, vero.
            </p>
            <p className="text-5xl rotate-90 text-primary text-center translate-x-5">....</p>
            <FaBus className="text-4xl text-primary" />
        </div>

          {/* Second card */}
                  <div className="text-center flex flex-col gap-1 px-2">
                       <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">....</p>
            <FaBus className="text-4xl text-secondary" />
            <p className="text-dark/70 font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, vero.
            </p>
            </div>
            <div className="text-center flex flex-col gap-1 px-2">
            <p className="text-dark/70 font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, vero.
            </p>
            <p className="text-5xl rotate-90 text-primary text-center translate-x-5">....</p>
            <FaBus className="text-4xl text-primary" />
        </div>

          {/* third card */}
            <div className="text-center flex flex-col gap-1 px-2">
            <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">....</p>
            <FaBus className="text-4xl text-secondary" />
            <p className="text-dark/70 font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, vero.
            </p>
            </div>
                  
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
