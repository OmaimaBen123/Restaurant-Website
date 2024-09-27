import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Banner from './Components/Banner/Banner.jsx';
import WhyChoose from './Components/WhyChoose/WhyChoose.jsx';
import About from './Components/About/About.jsx';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Banner />
      <WhyChoose />
      <Banner/>
      <About />
      <Footer/>
    </div>
  )
}

export default App
