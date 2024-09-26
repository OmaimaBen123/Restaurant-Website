import React from 'react';
import HeroImage from '../../assets/hero (2).png';
import PrimaryButton from '../Shared/PrimaryButton';



const Hero = () => {
    return (
      <>
      <div className='relative z-[-1]'>
          <div className="container py-16 sm:py-0 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
                  {/* text-context section */}
                  <div className='space-y-7 text-dark order-2 sm:order-1'>
                      <h1 className='text-5xl'> Fresh & Healthy Meal plan <span className='text-secondary font-cursive text-7xl'>Delivery </span>in Miami</h1>
                      <p className='lg:pr-64'>Delicious Meals Delivered to your Door From $132.95 per week</p>
                 
                  {/* button section */}
                  <div>
                      <PrimaryButton/>
                      </div>
                       </div>
                  {/*  image section */}
                  <div className='order-1 sm:order-2 relative z-30'>
                      <img src={HeroImage} alt="" className='w-full sm:scale-125
                      sm:translate-y-16 ' />
                  </div>
              </div>
          </div>
      
            </div>
            </>
  )
}

export default Hero
