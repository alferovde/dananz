import React from 'react'
import style from './pagination.module.scss'
import { IPagination } from '../../Interfaces/anyInterfaces'
const Pagination = (pagination:any, SetPagination:Function ) => {

    
    console.log(pagination)

    const itemArray = new Array(pagination.last_page).fill('')

    function setNewPage(page:number){
        SetPagination({...pagination!, current_page: page})
      }
 

    function renderPagination(){

        console.log(itemArray)
     return itemArray.map((item, index)=>{
        return <li className={style.pagination_item} 
        // onClick={setNewPage(2)} 
        >{index}</li>
      })
           
            
            
        

        
    }

  return (
    <ul className={style.pagination_container}>
       
         {renderPagination()}
       
    </ul>
  )
}

export default Pagination
