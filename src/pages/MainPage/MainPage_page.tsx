import React from 'react'
import style from './mainpage.module.scss'
import Hero from './Sections/Hero/Hero'
import { IWindowSize } from '../../Interfaces/anyInterfaces'
import About_section from './Sections/About/About_section'
import Service from './Sections/Service/Service'
const MainPage_page = ({innerWidth,innerHeight }:IWindowSize) => {

   
  return (
    <main className={`${style.main_page} container`}>
      <Hero innerWidth={innerWidth} />
      <About_section/>
      <Service/>
    </main>
  )
}

export default MainPage_page
