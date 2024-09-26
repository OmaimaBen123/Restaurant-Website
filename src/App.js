import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Banner from './Components/Banner/Banner.jsx';
import WhyChoose from './Components/WhyChoose/WhyChoose.jsx';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Banner />
      <WhyChoose />
      <About/>
    </div>
  )
}

export default App
