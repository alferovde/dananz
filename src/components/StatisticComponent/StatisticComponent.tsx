import React from 'react'
import style from './statistic.module.scss'
import { IWindowSize } from '../../Interfaces/anyInterfaces'
const StatisticComponent = ({innerWidth, position}:IWindowSize) => {

    
 

 

    return (
        <ul className={innerWidth! > 851 || position == 'colomn' ? style.static_container_colomn : style.static_container_row }>
            <li>
                <span>350+</span>
                <div className={style.static_text}>Project Completed</div>
            </li>
            <li>
                <span>23+</span>
                <div className={style.static_text}>Professional Teams</div>
            </li>
            <li>
                <span>15+</span>
                <div className={style.static_text}>Years Experience</div>
            </li>
        </ul>
    )
}

export default StatisticComponent
