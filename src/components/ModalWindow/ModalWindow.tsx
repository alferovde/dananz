import React from 'react'
import style from './modalwindow.module.scss'
const ModalWindow = ({children, closeMenu, hiddenMenu}:{children:React.ReactNode,hiddenMenu:boolean, closeMenu:Function }) => {


    

  return (
    <div className={`${style.modal__wrapper} animate__animated animate__bounceInDown`  }>
        <div className={style.modal__content}>   {children}</div>

        <div className={style.btn__close_menu} onClick={()=>closeMenu()}></div>
   
    </div>
  )
}

export default ModalWindow
