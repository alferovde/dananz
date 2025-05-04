import React from 'react'
import { IWindowSize } from '../../Interfaces/anyInterfaces'
import style from './team_page.module.scss'
import PageTitleComponent from '../../components/PageTitleComponent/PageTitleComponent'
import logo from '../../img/teams_page.png'
import Designers from './Designers/Designers'
import Service from '../MainPage/Sections/Service/Service'
import AboutPageService from '../AboutUs/AboutPageService/AboutPageService'
import Discuss from '../../components/Discuss/Discuss'
const OurTeam_page = ({innerWidth,innerHeight }:IWindowSize) => {
  return (
    <main className={style.team_page}>
      <PageTitleComponent title='Our Teams' description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' img={logo} />
      <Designers/>
      <AboutPageService/>
      <Discuss/>
    </main>
  )
}

export default OurTeam_page
