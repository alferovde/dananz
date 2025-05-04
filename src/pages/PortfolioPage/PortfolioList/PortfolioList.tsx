import React, { useState, useEffect } from 'react'
import TitleComponent from '../../../components/TitleComponent/TitleComponent'
import style from './portfolio_list.module.scss'
import axios from 'axios'
import { IPagination, IPortfolioItem, IWindowSize } from '../../../Interfaces/anyInterfaces'
import PortfolioCard from '../PortfolioCard/PortfolioCard'
import Pagination from '../../../StyledComponent/Pagination/Pagination'
const PortfolioList = ({innerWidth}:IWindowSize) => {

    const [portfolioList, setPortfolioList] = useState<IPortfolioItem[]>([])
    const [pagination, SetPagination] = useState<any>()
    const [page, setPage] = useState(pagination?.current_page)

   
        useEffect(()=>{
            axios({
                method: 'get',
                url: `${process.env.REACT_APP_DOMAIN}/portfolio?page=${page}`,
          
              })
                .then(function (response) {
                 
                  SetPagination(response.data)

               

                  setPortfolioList(response.data.data)
                }).catch(
                  function (response) {
                  
                    setPortfolioList(response.data)
                  }
                )
        
        },[page])




        console.log('--->')

      
        const itemArray = new Array(pagination?.last_page).fill('')
        function renderList(){
           return portfolioList.map((item:IPortfolioItem)=>{
            return  <PortfolioCard key={item.id} innerWidth={innerWidth} {...item}/>
            })
        }


           function renderPagination(){
        
                console.log(itemArray)
             return itemArray.map((item, index)=>{
                return <li key={index}  className={index+1=== pagination?.current_page ? style.active: undefined} 
                onClick={()=>setPage(index+1)} 
                >{index+1}</li>
              })
                  
            }


            



  return (
    <section className={`${style.portfolio_list} container`}>
        <TitleComponent title='Portofolio' />
        <div className={style.portfolio_list__container}>
        {portfolioList.length > 0 ?renderList() : <h1>Loading...</h1>}
        </div>
            
            <ul className={style.pagination_container}>
              {renderPagination()}
            </ul>
            {/* <Pagination {...pagination} SetPagination={SetPagination} /> */}
    </section>
  )
}



export default PortfolioList
