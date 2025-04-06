import React from 'react'
import style from './discess.module.scss'
import Button from '../../StyledComponent/Button/Button'
const Discuss = () => {
  return (
    <section className={style.discuss_section}>
      <div className={`${style.duscuss_section__content} container`}>
        <div className={style.discuss_section__title}>
          <h2>let's discuss making your interior like a dream place!</h2>
        </div>
        <div className={style.discuss_section__description}>
          <p>Contact us below to work together to build your amazing interior</p>
          <Button>Contact Us</Button>
        </div>

      </div>
      
    </section>
  )
}

export default Discuss
