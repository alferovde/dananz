import React, {useRef, useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import './App.scss';
import Header from './components/Header/Header';
import MainPage_page from './pages/MainPage/MainPage_page';
import Footer from './components/Footer/Footer';
import AboutUs_page from './pages/AboutUs/AboutUs_page';
import { IWindowSize } from './Interfaces/anyInterfaces';
import 'animate.css'

import Services_page from './pages/Services/Services_page';
import OurTeam_page from './pages/OurTeam/OurTeam_page';
import Contacts_page from './pages/Contacts/Contacts_page';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import PortfolioID_page from './pages/PortfolioID/PortfolioID_page';

function App() {

  const [windowSize, setWindowSize] = useState<IWindowSize>(getWindowSize() );

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }




  return (

    <BrowserRouter>
      <Header {...windowSize} />
      <Routes>
        <Route path="/" element={<MainPage_page {...windowSize} />} />
        <Route path="/about" element={<AboutUs_page {...windowSize} />} />
        <Route path="/services" element={<Services_page {...windowSize} />} />
        <Route path="/teams" element={<OurTeam_page {...windowSize} />} />
        <Route path="/contact" element={<Contacts_page {...windowSize} />} />
        <Route path="/portfolio" element={<PortfolioPage {...windowSize} />} />
        <Route path="/portfolio/:id" element={<PortfolioID_page {...windowSize} />} />


      </Routes>
      <Footer />
    </BrowserRouter>
   
  );
}

export default App;
