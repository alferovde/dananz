import React from 'react'
import style from './service.module.scss'
import TitleComponent from '../../../../components/TitleComponent/TitleComponent'
import ListComponent from '../../../../components/ListComponent/ListComponent'
import { service_list } from '../../../../LocalData/list'
const Service = () => {
  return (
    <section className={style.service}>
        <TitleComponent  title='SERVICE' text="attractive furniture  with the best quality." description='Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.' position='bottom' />

        <div className={style.service__content}>

            <div className={style.list__section}>
                <ListComponent data={service_list}/>
            </div>
        </div>
      
    </section>
  )
}

export default Service
