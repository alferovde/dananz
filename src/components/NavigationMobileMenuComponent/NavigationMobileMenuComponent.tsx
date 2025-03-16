import React, { useState } from 'react'
import style from './mobile_menu.module.scss'
import ModalWindow from '../ModalWindow/ModalWindow';

import { navigationMenu } from '../../LocalData/navigationMenu';
import { NavLink, Link } from "react-router";
const NavigationMobileMenuComponent = () => {

  const [hiddenMenu, setHiddenMenu] = useState<boolean>(false);

  function openMobileMenu(){
  
    setHiddenMenu(prev=>!prev)

    // if(hiddenMenu){
    //   setTimeout(()=>{
    //     setHiddenMenu(prev=>!prev)
    //   },1000)
    // }else{
    //   setHiddenMenu(prev=>!prev)
    // }
  }

  const renderMenu = ():React.ReactNode => {
   
    return navigationMenu.map(item=>{
        return <NavLink key={item.id} to={item.link} className={({ isActive }) =>
            isActive ? style.active : ""
          }> {item.text}  </NavLink>
    })
 
  
}

  return (
    <>
      <div>

{!hiddenMenu ?    <div className={style.btn__mobile_open}
          onClick={() => openMobileMenu()}
        ></div> : undefined }
     

      </div>

      {hiddenMenu? <ModalWindow closeMenu={openMobileMenu} hiddenMenu  >
        <nav className={style.mobile__menu}>    {renderMenu()}</nav>
   
        </ModalWindow> : undefined}
    </>

  )
}

export default NavigationMobileMenuComponent
