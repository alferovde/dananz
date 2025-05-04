import React, {useState, useEffect, use} from 'react'
import style from './designers.module.scss'
import TitleComponent from '../../../components/TitleComponent/TitleComponent'
import { IUsersList } from '../../../Interfaces/anyInterfaces'
import axios from 'axios'
const Designers = () => {

    const [designers, setDesigners] = useState<IUsersList[]>([])


   

    useEffect(()=>{


      axios({
        method: 'get',
        url: `${process.env.REACT_APP_DOMAIN}/teams`,
  
      })
        .then(function (response) {
        
          setDesigners(response.data)
        }).catch(
          function (response) {
           
            setDesigners(response.data)
          }
        )


        // fetch(`${process.env.REACT_APP_DOMAIN}/teams`)
        // .then(data=>data.json())
        // .then(result=>setDesigners(result))

        

    },[])



    function renserList(array:IUsersList[]){

        return array.map(user=>{
           return <li key={user.id} className={style.designers__list__item} style={{backgroundImage: `url(${process.env.REACT_APP_IMG_LINK}${user.avatar})`}}>
           
            <div className={style.designers__list__item__info}>
                <p>{user.name} {user.sur_name}</p>
                <span>{user.profession}</span>
            </div>
           </li>
        })

    }


  return (
    <section className={`${style.designers} container`}>
      <TitleComponent  title='Designer' description='Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.' text='Creative Person'  position='bottom' />

      <div className={style.designers__list}>
        {designers.length ===0 ? <h2>Загрузка...</h2> : renserList(designers)}
      </div>
    </section>
  )
}

export default Designers
