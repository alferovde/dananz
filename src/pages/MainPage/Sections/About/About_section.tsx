import React from 'react'
import style from './about_section.module.scss'
import TitleComponent from '../../../../components/TitleComponent/TitleComponent'
import about_img from '../../../../img/about_section.png'
import Button from '../../../../StyledComponent/Button/Button'
import SmallCartComponent from '../../../../StyledComponent/SmallCartComponent/SmallCartComponent'
import user from '../../../../img/user_img.png'
const About_section = () => {
  return (
    <section className={`${style.about__section} container`}>
        <TitleComponent title='about' text="“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”" position='bottom' />
        <div className={style.about__main}>
          <div className={style.about__cart}>
            <SmallCartComponent img={user} name='Arga Danaan' sub_title='CEO of Dananz'/>
          </div>
          <div className={style.about__img}>
            <img src={about_img} alt="about image" />
          </div>
          <div className={style.about__description}>
            <p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>
            <Button type='blue'>Learn More</Button>
          </div>
        </div>
      
    </section>
  )
}

export default About_section
