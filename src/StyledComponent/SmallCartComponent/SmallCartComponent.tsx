import React from 'react'
import style from './smallcart.module.scss'
const SmallCartComponent = ({img, name,sub_title }:{img:string, name:string, sub_title:string}) => {
  return (
    <div className={style.small_cart}>
        <img src={img} alt={name} />
        <div className={style.small_cart__description}>
            <p>{name}</p>
            <span>{sub_title}</span>
        </div>

       
      
    </div>
  )
}

export default SmallCartComponent
