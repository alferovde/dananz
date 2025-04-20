import React from 'react'
import style from './aboutpage.module.scss'
import PageTitleComponent from '../../components/PageTitleComponent/PageTitleComponent'
import about_page_img from '../../img/about_page.png'
import AboutPageAchevement from './AboutPageAchevement/AboutPageAchevement'
import { IWindowSize } from '../../Interfaces/anyInterfaces'
import AboutPageService from './AboutPageService/AboutPageService'
import Discuss from '../../components/Discuss/Discuss'

const AboutUs_page = ({innerWidth,innerHeight}:IWindowSize) => {
  return (
    <main className={style.about_page}>
      <PageTitleComponent title='About' description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ' img={about_page_img}/>
     <AboutPageAchevement innerWidth={innerWidth}/>
     <AboutPageService/>
     <Discuss/>

    </main>
  )
}

export default AboutUs_page
