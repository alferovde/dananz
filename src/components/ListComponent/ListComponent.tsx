import React, { useState, useEffect } from 'react'
import style from './listcomponent.module.scss'
import { IList } from '../../Interfaces/anyInterfaces'
import arrow from '../../img/arrow-right.png'
const ListComponent = ({ data }: { data: IList[] }) => {

  const [list, setList] = useState(data)


  function openIteList(id: number) {






    setList(
      list.map((item) => {
        return item.id == id
          ? { ...item, hidden: false }
          : { ...item, hidden: true };
      })
    );


  }





  const renderList = (list: IList[]): React.ReactNode => {
    return list.map(item => {
      return <li key={item.id} className={style.list_component__item} onClick={() => openIteList(item.id)}>

          <div className={style.list_component__item__header}>
          <span>0{item.id}</span>
          <p>{item.title}</p>
          {item.hidden ? <img src={arrow} alt="arrow" /> :
         <img src={arrow} alt="arrow" style={{transform: ' rotate(90deg)', transition:'.3s'}} />}
          
          </div>
          
          {!item.hidden ? <div className={`${style.list_component__item__content} animate__animated animate__zoomIn`}>{item.description}</div> :
         undefined}



       

      </li>
    })
  }

  return (
    <ul className={style.list_component__container}>
      {renderList(list)}
    </ul>
  )
}

export default ListComponent
