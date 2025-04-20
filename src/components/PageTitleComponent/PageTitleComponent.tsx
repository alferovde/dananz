import React from 'react'
import style from './pagetitlecomponent.module.scss'
import { IPageTitle } from '../../Interfaces/anyInterfaces'
const PageTitleComponent = ({title, description, img}:IPageTitle) => {
  return (
    <div className={`${style.title_page} container`}>
        <h2>{title}</h2>
        <p>{description}</p>
        {img ? <img src={img} alt={title} /> : undefined }
        
      
    </div>
  )
}

export default PageTitleComponent
