import React, {useState, useEffect} from 'react'
import { IPortfolioSingle, IWindowSize } from '../../Interfaces/anyInterfaces'
import axios from 'axios'
import { useParams } from 'react-router'
import PageTitleComponent from '../../components/PageTitleComponent/PageTitleComponent'
import style from './portfolio_id.module.scss'
import Discuss from '../../components/Discuss/Discuss'
const PortfolioID_page = ({innerWidth,innerHeight }:IWindowSize) => {

  const [portfolio, setPortfolio] =useState<IPortfolioSingle>()

  const params = useParams()

  // console.log('--->', portfolio)

  useEffect(()=>{
    axios({
        method: 'get',
        url: `${process.env.REACT_APP_DOMAIN}/portfolio/${params.id}`,
  
      })
        .then(function (response) {
         
          setPortfolio(response.data[0])

       

   
        }).catch(
          function (response) {
          
            
          }
        )

},[])

        function renderList(){
          return portfolio?.process.split('&').map(item=>{
            return <p>{item}</p>
          })

         
        }

        renderList()

  return (
    <main className={`${style.portfolio_id}  `}>
      <PageTitleComponent title={portfolio!?.title} description={portfolio!?.sub_title} img={process.env.REACT_APP_IMG_LINK+portfolio!?.logo} />
      <div className="container"> <div className={style.portfolio_id__data}>
      <div className={style.portfolio_id__data__left}>
        <div className={style.portfolio_id__data__left_top}>  <h2>Project Overview</h2>
        <p>{portfolio?.overview}</p></div>
      
        <div className={style.portfolio_id__data__left_bottom}>
          {portfolio?.date}
        </div>

      </div>
      <div className={style.portfolio_id__data__right}>
        <h2>Design Process</h2>
        {renderList()}
      </div>

      </div>

      <div className={style.portfolio_id__imgs}>
        <div className={style.portfolio_id__imgs_1}>
          <img src={process.env.REACT_APP_IMG_LINK+portfolio!?.img1} alt={portfolio!?.title+1} />
        </div>
        <div className={style.portfolio_id__imgs_2}>
        <img src={process.env.REACT_APP_IMG_LINK+portfolio!?.img2} alt={portfolio!?.title+2} />
        </div>
        <div className={style.portfolio_id__imgs_3}>
        <img src={process.env.REACT_APP_IMG_LINK+portfolio!?.img3} alt={portfolio!?.title+3} />
        </div>
        <div className={style.portfolio_id__imgs_4}>
        <img src={process.env.REACT_APP_IMG_LINK+portfolio!?.img4} alt={portfolio!?.title+4} />
        </div>
        <div className={style.portfolio_id__imgs_5}>
        <img src={process.env.REACT_APP_IMG_LINK+portfolio!?.img5} alt={portfolio!?.title+5} />
        </div>

      </div></div>
     

      <Discuss/>
    </main>
  )
}

export default PortfolioID_page
