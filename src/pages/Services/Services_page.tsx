import React from 'react'
import { IWindowSize } from '../../Interfaces/anyInterfaces'
import style from './service_page.module.scss'
import PageTitleComponent from '../../components/PageTitleComponent/PageTitleComponent'
import service_page from '../../img/service_page.png'
import Service_achevement from './Service_achevement/Service_achevement'
import Product from '../MainPage/Sections/Product/Product'
import Discuss from '../../components/Discuss/Discuss'
const Services_page = ({innerWidth,innerHeight }:IWindowSize) => {
  return (
    <main className={style.service_page}>
            <PageTitleComponent title='Services' description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' img={service_page}/>
            <Service_achevement/>
            <Product/>
            <Discuss/>

            

    </main>
  )
}

export default Services_page
