import React from 'react'
import Style from './pagination.module.css'
import {IoMdArrowDropleft} from 'react-icons/io'
function PrevButton() {
  return (
    <button className={Style.prevButton}>{<IoMdArrowDropleft className={Style.icon}/>}</button>
  )
}

export default PrevButton