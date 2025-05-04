import React from 'react'
import { IInputComponent, IPhoneType } from '../../Interfaces/anyInterfaces'
import style from './input.module.scss'
const Input = ({labelName, required, placeholder, type, select}:IInputComponent) => {


    function renderSelect(select:IPhoneType[]){
        return <select >
            {select.map((item:IPhoneType)=>{
                return <option key={item.id}>{item.type}</option>
            })}
        </select>
    }

  return (
    <div className={style.input_style}>
    <label htmlFor={labelName}>{labelName}</label>
    
    <input name={labelName} required={required} placeholder={placeholder} type={type} style={select ? {'paddingLeft':'100px'}: undefined}/>
    {select ?  <div className={style.input_style__select}>{renderSelect(select)}</div> : undefined}
     
     
      </div>
  
  )
}

export default Input
