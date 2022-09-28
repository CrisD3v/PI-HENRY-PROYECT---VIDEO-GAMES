import React from 'react'
import Style from './pagination.module.css'
import {IoMdArrowDropright} from 'react-icons/io'

function NextButton() {
  return (
    <button className={Style.nextButton}>{<IoMdArrowDropright className={Style.icon}/>}</button>
  )
}

export default NextButton