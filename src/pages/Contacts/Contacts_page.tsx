import React from 'react'
import { IWindowSize } from '../../Interfaces/anyInterfaces'
import style from './contact_page.module.scss'
import PageTitleComponent from '../../components/PageTitleComponent/PageTitleComponent'
import ContactForm from './ContactForm/ContactForm'
import Location from './Location/Location'
import Discuss from '../../components/Discuss/Discuss'
const Contacts_page = ({innerWidth,innerHeight }:IWindowSize) => {
  return (
    <main className={style.contact_page}>
            <PageTitleComponent title='Contact Us' description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'/>
            <ContactForm/>
            <Location/>
            <Discuss/>
      
    </main>
  )
}

export default Contacts_page
