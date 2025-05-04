import React from 'react'
import { IWindowSize } from '../../Interfaces/anyInterfaces'
import style from './portfolio_page.module.scss'

import PageTitleComponent from '../../components/PageTitleComponent/PageTitleComponent'
import img from '../../img/portfolio_page.png'
import PortfolioList from './PortfolioList/PortfolioList'
import AboutPageService from '../AboutUs/AboutPageService/AboutPageService'
import Discuss from '../../components/Discuss/Discuss'
const PortfolioPage = ({innerWidth,innerHeight }:IWindowSize) => {
  return (
    <main className={`${style.portfolio_page} `}>
      
      <PageTitleComponent title='Portofolio' description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' img={img} />
      
      <PortfolioList innerWidth={innerWidth}/>
      <AboutPageService/>
      <Discuss/>
    
    </main>
  )
}

export default PortfolioPage
