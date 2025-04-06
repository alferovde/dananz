import React from 'react'
import style from './hero.module.scss'
import hero_logo from '../../../../img/hero_img.png'
import StatisticComponent from '../../../../components/StatisticComponent/StatisticComponent'
import { IWindowSize } from '../../../../Interfaces/anyInterfaces'
const Hero = ({innerWidth}:IWindowSize) => {



  return (
    <section className={`${style.hero} container`}>
      <div className={style.hero__header}>
        <h1>Design your interor with high quality.</h1>


      </div>
      <div className={style.hero__footer}>
        <img src={hero_logo} alt="hero logo" />
        <div className={style.header__rights}>
          <span>2022</span>
          <div className="">all rights reserved</div>
        </div>
      </div>

    <div className={innerWidth! > 851 ? style.hero__statistic :style.hero__statistic_row}>
          <StatisticComponent  innerWidth={innerWidth}/>
    </div>
    </section>
  )
}

export default Hero
