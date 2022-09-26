import React from 'react'
import Checkbox from '../../Atoms/Inputs/InputForm/Checkbox/Checkbox'
import Style from './asideOrder.module.css'

function ApiOrDb() {
  return (
    <div className={Style.container}>
        <div className={Style.subContainer}>
            <p className={Style.text}>ALL</p>
            <Checkbox/>
        </div>
        <div className={Style.subContainer}>
            <p className={Style.text}>Api</p>
            <Checkbox/>
        </div>
        <div className={Style.subContainer}>
            <p className={Style.text}>DB</p>
            <Checkbox/>
        </div>
    </div>
  )
}

export default ApiOrDb