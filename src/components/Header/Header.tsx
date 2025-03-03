import React from 'react'
import NavigationMenuComponent from '../NavigationMenuComponent/NavigationMenuComponent'
import logo from '../../img/logo.svg'
import style from './header.module.scss'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <header className={`${style.header} container `}>
      <div className={style.logo}>
        <NavLink to={'/'}><img src={logo} alt="logo" /></NavLink>
        
      </div>

      <NavigationMenuComponent/>
    </header>
  )
}

export default Header
