import React from 'react'
import { IButton } from '../../Interfaces/styledInterfaces'
import style from './button.module.scss'
const Button = ({children}:IButton) => {
  return (
    <button className={style.button_blue}>
      
    </button>
  )
}

export default Button
