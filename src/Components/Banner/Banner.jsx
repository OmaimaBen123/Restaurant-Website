import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import kiwi_image from '../../assets/kiwi.png';
import appl_image from '../../assets/appl.png';
import lemon_image from '../../assets/lemon.png';
import tomato from '../../assets/tomato.png';


const Banner = () => {
  return (
    <>
      <div className="container py-14 relative">
        <div>
          <h1 className="text-2xl text-dark font-semibold py-8 tracking-wider text-center">
            Taste the Healthy Difference
          </h1>

          {/* Content section */}
          <div className="space-y-10">
            
            {/* First section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div>
                <p>
                  We know that <span className="text-primary">time</span> is the greatest value in the modern world. Our healthy meal plan delivery service, Good Food in Miami, is the answer for those who want to eat healthily while saving time on buying food and preparing delicious, healthy meals.
                </p>
              </div>
              <div>
                {/* Additional content or image can go here */}
              </div>
            </div>

            {/* Second section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div>
                {/* Additional content or image can go here */}
              </div>
              <div>
                <p>
                  We know that <span className="text-primary">time</span> is the greatest value in the modern world. Our healthy meal plan delivery service, Good Food in Miami, is the answer for those who want to eat healthily while saving time on buying food and preparing delicious, healthy meals.
                </p>
              </div>
            </div>
        
            </div>
                  <div className='flex justify-center mt-10
           sm:mt-14'><PrimaryButton /></div>       
              </div>
              {/* fruits*/}
              
              <div className='absolute top-5 left-16 sm:bottom-0 sm:left-0 opacity-55 sm:opacity-100'>
                  <img src={kiwi_image} alt="" className='max-w-[250px]'/>
              </div>
              <div className='absolute bottom-16 left-16 
              sm:left-0 opacity-50 sm:opacity-100'>
                  <img src={tomato} alt="" className='max-w-[260px] '/>
              </div>
              <div className='absolute top-10 right-16 sm:right-20 opacity-50 sm:opacity-100'>
                  <img src={lemon_image} alt="" className='max-w-[200px]'/>
              </div>

              <div className='absolute bottom-0 right-0 hidden sm:block'>
                  <img src={appl_image} alt="" className='max-w-[200px]'/>
              </div>
      </div>
    </>
  );
};

export default Banner;
