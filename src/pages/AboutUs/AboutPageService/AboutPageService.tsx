import React from 'react'
import style from './about_service.module.scss'
import TitleComponent from '../../../components/TitleComponent/TitleComponent'
import { about_service_list } from '../../../LocalData/list'
import { IServiceList } from '../../../Interfaces/anyInterfaces'
const AboutPageService = () => {


    const renderServiceList =()=>{
        
        return <ul className={style.about__list__container}>

            {about_service_list.map((item: IServiceList) => {
                return <li key={item.id} className={style.about__list__item}>
                    <span></span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </li>
            })}

        </ul>
            
       
    }


  return (
    <section className={`${style.about__service} container`}>
      <TitleComponent  title='SERVICE' description='Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.' text="Why Choose Us"  position='bottom' />

      <div className={style.about__list}>
            {renderServiceList()}
      </div>
      
    </section>
  )
}

export default AboutPageService
