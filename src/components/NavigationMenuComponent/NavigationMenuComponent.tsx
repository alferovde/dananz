import React from 'react'
import { navigationMenu } from '../../LocalData/navigationMenu'
import style from './navigationmenu.module.scss'
import { NavLink, Link } from "react-router";
const NavigationMenuComponent = () => {


  
    const renderMenu = ():React.ReactNode => {
   
        return navigationMenu.map(item=>{
            return <NavLink key={item.id} to={item.link} className={({ isActive }) =>
                isActive ? style.active : ""
              }> {item.text}  </NavLink>
        })
     
      
    }

    


  return (
    <nav className={style.nav_container}>
      {renderMenu()}
    </nav>
  )
}

export default NavigationMenuComponent
