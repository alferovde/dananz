import React from 'react'
import TitleComponent from '../../../../components/TitleComponent/TitleComponent'
import style from './product.module.scss'
import ListComponent from '../../../../components/ListComponent/ListComponent'
import { product_service_list } from '../../../../LocalData/list'

const Product = () => {
  return (
    <section className={`${style.product__section} container`}>
      <TitleComponent title='PRODUCT' text='Choose your product themes.' description='Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.'/>

      <div className={style.list__section}>
            <ListComponent data={product_service_list}/>
      </div>
    </section>
  )
}

export default Product
