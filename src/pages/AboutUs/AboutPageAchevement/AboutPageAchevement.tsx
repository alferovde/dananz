import React from 'react'
import TitleComponent from '../../../components/TitleComponent/TitleComponent'
import style from './achevement.module.scss'
import photo from '../../../img/achevement_photo.png'
import StatisticComponent from '../../../components/StatisticComponent/StatisticComponent'
import { IWindowSize } from '../../../Interfaces/anyInterfaces'
const AboutPageAchevement = ({innerWidth}:IWindowSize) => {

  console.log(innerWidth)

  return (
    <section className={`${style.achevement__component} container`}>
      <div className={style.achevement__component__title}>
      <TitleComponent  title='ACHIEVEMENT' text="interior customization with Danaanz, best quality with professional workers"  position='bottom' />
      </div>
    <div className={style.achevement__component__description}>
    <div className={style.achevement__component__description_photo}>
      <img src={photo} alt="achevement_photo" />
    </div>
    <div className={style.achevement__component__description_statistic}>
  

      <StatisticComponent position={innerWidth! < 970 ? 'row' : 'colomn'} />
      
    </div>

    </div>


    </section>
  )
}

export default AboutPageAchevement
