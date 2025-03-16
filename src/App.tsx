import React, {useRef, useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import './App.scss';
import Header from './components/Header/Header';
import MainPage_page from './pages/MainPage/MainPage_page';
import Footer from './components/Footer/Footer';
import AboutUs_page from './pages/AboutUs/AboutUs_page';
import { IWindowSize } from './Interfaces/anyInterfaces';
import 'animate.css'

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
        <Route path="/about" element={<AboutUs_page />} />

      </Routes>
      <Footer />
    </BrowserRouter>
   
  );
}

export default App;
