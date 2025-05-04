import React from 'react'
import style from './portfolio_card.module.scss'
import { IPortfolioItem } from '../../../Interfaces/anyInterfaces'
import SmallCartComponent from '../../../StyledComponent/SmallCartComponent/SmallCartComponent'
import Button from '../../../StyledComponent/Button/Button'
import { useNavigate } from 'react-router'
const PortfolioCard = ({id,logo, title, overview, avatar, name, profession, innerWidth}:IPortfolioItem) => {

    const navigate = useNavigate();

    if(id%2 || innerWidth! < 768){
        return (
   
            <div className={style.card_left} key={id}>
                <div className={style.card_left_img}>
                    <img src={process.env.REACT_APP_IMG_LINK + logo} alt={title}  />
                    <div className={style.card_left_user}>
                    <SmallCartComponent img={process.env.REACT_APP_IMG_LINK+avatar} name={name} sub_title={profession} />
                    </div>
                    
                </div>
                <div className={style.card_left_data}>
                    <h3>{title}</h3>
                    <p>{overview.slice(0,110)+  ' ...'}</p>
                    <Button type='blue' onClick={()=> navigate(`/portfolio/${id}`)}>See More </Button>
                </div>
      
            </div> 
        )
    }else{
        return (
   
            <div className={style.card_right} key={id}>
                <div className={style.card_right_data}>
                    <h3>{title}</h3>
                    <p>{overview.slice(0,110)+' ...'}</p>
                    <Button type='blue' onClick={()=> navigate(`/portfolio/${id}`)}>See More </Button>
                </div>
                <div className={style.card_right_img}>
                    <img src={process.env.REACT_APP_IMG_LINK + logo} alt={title} />
                    <div className={style.card_right_user}>
                    <SmallCartComponent img={process.env.REACT_APP_IMG_LINK+avatar} name={name} sub_title={profession} />
                    </div>
                </div>
                
      
            </div> 
        )
    }

  
}

export default PortfolioCard
