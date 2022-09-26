import React from 'react'
import Checkbox from '../../Atoms/Inputs/InputForm/Checkbox/Checkbox'
import Style from './asideOrder.module.css'

function Alfabetico() {
  return (
    <div className={Style.container}>
        <div className={Style.subContainer}>
            <p className={Style.text}>A - Z</p>
            <Checkbox/>
        </div>
        <div className={Style.subContainer}>
            <p className={Style.text}>Z - A</p>
            <Checkbox/>
        </div>
    </div>
  )
}

export default Alfabetico