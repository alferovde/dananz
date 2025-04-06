import React from 'react'
import style from './mainpage.module.scss'
import Hero from './Sections/Hero/Hero'
import { IWindowSize } from '../../Interfaces/anyInterfaces'
import About_section from './Sections/About/About_section'
import Service from './Sections/Service/Service'
import Product from './Sections/Product/Product'
import Material from './Sections/Material/Material'
import Discuss from '../../components/Discuss/Discuss'
const MainPage_page = ({innerWidth,innerHeight }:IWindowSize) => {

   
  return (
    <main className={`${style.main_page}  `}>
      <Hero innerWidth={innerWidth} />
      <About_section/>
      <Service/>
      <Product/>
      <Material/>
      <Discuss/>
    </main>
  )
}

export default MainPage_page
