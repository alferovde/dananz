import React from 'react'
import style from './material.module.scss'
import TitleComponent from '../../../../components/TitleComponent/TitleComponent'
import Button from '../../../../StyledComponent/Button/Button'
import left from '../../../../img/material_left.png'
import top from '../../../../img/material_top.png'
import bottom from '../../../../img/material_bottom.png'

const Material = () => {
  return (
    <section className={`${style.material__section} container`}>
      <div className={style.material__title}>
        <TitleComponent title='MATERIAL' text='Choose your product themes.' description='Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.' position='bottom' />
        <Button type='transparent'>See Materials</Button>
      </div>

      <div className={style.material__content}>


        <div className={style.left}>
          <img src={left} alt="left" />
        </div>

        <div className={style.right}>
          <img src={top} alt="top" />
          <img src={bottom} alt="bottom" />
        </div>






      </div>

    </section>
  )
}

export default Material
