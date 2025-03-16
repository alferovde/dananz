import React from 'react'
import NavigationMenuComponent from '../NavigationMenuComponent/NavigationMenuComponent'
import logo from '../../img/logo.svg'
import style from './header.module.scss'
import { NavLink } from 'react-router'
import { IWindowSize } from '../../Interfaces/anyInterfaces'
import NavigationMobileMenuComponent from '../NavigationMobileMenuComponent/NavigationMobileMenuComponent'

const Header = ({innerWidth,innerHeight }:IWindowSize) => {
  return (
    <header className={`${style.header}`}>
      <div className={`${style.header__inner} container `}>
      <div className={style.logo}>
        <NavLink to={'/'}><img src={logo} alt="logo" /></NavLink>
        
      </div>

       {innerWidth! > 768 ? <NavigationMenuComponent/> : <NavigationMobileMenuComponent/>}
      </div>
      
      
    </header>
  )
}

export default Header
