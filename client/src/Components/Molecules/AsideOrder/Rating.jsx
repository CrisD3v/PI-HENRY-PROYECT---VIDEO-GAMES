import React from 'react'
import Checkbox from '../../Atoms/Inputs/InputForm/Checkbox/Checkbox'
import Style from './asideOrder.module.css'

function Rating() {
  return (
    <div className={Style.container}>
        <div className={Style.subContainer}>
            <p className={Style.text}>Menor a Mayor</p>
            <Checkbox/>
        </div>
        <div className={Style.subContainer}>
            <p className={Style.text}>Mayor a Menor</p>
            <Checkbox/>
        </div>
    </div>
  )
}

export default Rating