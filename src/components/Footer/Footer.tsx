import React from 'react'
import style from './footer.module.scss'
import logo from '../../img/logo.svg'
import btn_email from '../../img/btn_email.svg'
import facebook from '../../img/facebook.svg'
import instagramm from '../../img/instagram.svg'
import twitter from '../../img/tiktok.svg'
import youtube from '../../img/youtube.svg'

const Footer = () => {
  return (
    <footer className={`${style.footer} container`}>

      <div className={style.footer__left}>
        <img src={logo} alt="" />
        <h2>One of the best furniture agency.</h2>
      </div>
      <div className={style.footer__right}>

        <div className={style.footer__input_email}>
          <label htmlFor="email">
            <div className={style.footer__input_email_round}></div>
            Enter  your email to get the laterst news
          </label>
          <input type="email" name="email" id="email" placeholder='Email Address' />
          <button className={style.footer__input_email_btn}>
            <img src={btn_email} alt="btn_email" />
          </button>
          <div className={style.footer__input_social}>
            <p>Follow us On</p>
            <ul>
              <li>
                <img src={facebook} alt="facebook" />
              </li>
              <li>  <img src={instagramm} alt="instagramm" /></li>
              <li>  <img src={twitter} alt="twitter" /></li>
              <li>  <img src={youtube} alt="youtube" /></li>
            </ul>
          </div>
        </div>

      </div>


    </footer>
  )
}

export default Footer
