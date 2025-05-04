import React from 'react'
import TitleComponent from '../../../components/TitleComponent/TitleComponent'
import style from './service_achevement.module.scss'
import { service_achevement_list } from '../../../LocalData/list'
import { IServiceAchevementList } from '../../../Interfaces/anyInterfaces'

const Service_achevement = () => {


    function renderList(){
        return <ul className={style.service_achevement_list__container}>
            {service_achevement_list.map((item:IServiceAchevementList)=>{

                    const img = require(`../../../img/achevement_photo_list_${item.id}.png`)
             

                return <li key={item.id} className={style.service_achevement_list__item}>
                  <div className={style.service_achevement_list__item_img}>   
                    <img src={img} alt={item.title} />
                    </div>
                  <div className={style.service_achevement_list__item_data}>
                     <h3>{item.title}</h3>
                    <p>{item.description}</p> 
                  </div>
                 

                </li>
            })}
        </ul>
    }


  return (
    <section className={`${style.service_achevement} container`}>
      <TitleComponent  title='ACHIEVEMENT'   position='bottom' />

      <div className={style.service_achevement_list}>
            {renderList()}
      </div>
      
    </section>
  )
}

export default Service_achevement
