import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import './App.scss';
import Header from './components/Header/Header';
import MainPage_page from './pages/MainPage/MainPage_page';
import Footer from './components/Footer/Footer';
import AboutUs_page from './pages/AboutUs/AboutUs_page';


function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage_page />} />
        <Route path="/about" element={<AboutUs_page />} />

      </Routes>
      <Footer />
    </BrowserRouter>
   
  );
}

export default App;
