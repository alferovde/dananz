import React from 'react'
import style from './text_area.module.scss'
import { ITextArea } from '../../Interfaces/anyInterfaces'
const TextArea = ({labelName, placeholder,required, height}:ITextArea) => {
  return (
    <div className={style.text_area}>
      <label htmlFor={labelName}>{labelName}</label>
      <textarea name={labelName} id="" required={required} placeholder={placeholder} style={{height:height}}></textarea>
    </div>
  )
}

export default TextArea
