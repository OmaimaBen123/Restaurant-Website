import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Banner from './Components/Banner/Banner.jsx';
import WhyChoose from './Components/WhyChoose/WhyChoose.jsx';
import About from './Components/About/About.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Popup from './Components/Popup/Popup.jsx';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const HandlePop = () => {
    setShowPopup(true);
  }
  return <div className="overflow-x-hidden">
      <Navbar HandlePop={HandlePop} />
      <Hero />
      <Banner />
      <WhyChoose />
      <Banner />
      <About HandlePop={HandlePop} />
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>;
}

export default App
