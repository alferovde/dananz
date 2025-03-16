import React from 'react'
import style from './mainpage.module.scss'
import Hero from './Sections/Hero/Hero'
import { IWindowSize } from '../../Interfaces/anyInterfaces'
const MainPage_page = ({innerWidth,innerHeight }:IWindowSize) => {

   
  return (
    <main className={`${style.main_page} container`}>
      <Hero innerWidth={innerWidth} />
    </main>
  )
}

export default MainPage_page
