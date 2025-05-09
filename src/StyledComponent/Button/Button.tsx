import React from 'react'
import { IButton } from '../../Interfaces/styledInterfaces'
import style from './button.module.scss'
const Button = ({children, type, onClick=()=>{}}:IButton) => {
  return (
    <button className={type == 'blue' ? style.button_blue : style.button_transparent } onClick={()=>onClick()}>
      {children}
    </button>
  )
}

export default Button
