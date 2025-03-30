import React from 'react'
import style from './titlecomponent.module.scss'
const TitleComponent = ({ text, title, description, position }: { text?: string, title: string, description?: string, position?:string }) => {
  return (
    <div className={style.title_component}>

      <h4 >{title}</h4>

      <div  className={position==='bottom'? style.title_component__description_bottom : style.title_component__description_left }>  
        
         <h3 >{text}</h3>

        <p>{description}</p></div>



    </div>
  )
}

export default TitleComponent
