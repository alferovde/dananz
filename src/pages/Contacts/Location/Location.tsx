import React from 'react'
import style from './location.module.scss'
import TitleComponent from '../../../components/TitleComponent/TitleComponent'
const Location = () => {
  return (
    <section className={`${style.location_section} container`}>
      <TitleComponent title='Loaction'/>
      <div className={style.location_section__content}>
      <div className={style.location_section__content_left}>
        <div className=""><h2>Visit Our Stores</h2>
        <p>Find us at these locations.</p></div>
        <div className=""> <h3>Email</h3>
        <p>dananz@gmail.com</p></div>
       <div className="">    <h3>Phone</h3>
       <p>+62 815 002 1000</p></div>
    
      </div>
      <div className={style.location_section__content_right}>
        <div className={style.location_section__content_card}>
            <h3>Jakarta</h3>
            <p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
        </div>
        <div className={style.location_section__content_card}>
            <h3>Surakarta</h3>
            <p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
        </div>
        <div className={style.location_section__content_card}>
            <h3>Yogyakarta</h3>
            <p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
        </div>
        <div className={style.location_section__content_card}>
            <h3>Bandung</h3>
            <p>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
        </div>
      </div>


      </div>

    </section>
  )
}

export default Location
