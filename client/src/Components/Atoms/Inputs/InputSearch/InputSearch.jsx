import React from 'react'
import Style from './inputSearch.module.css'

function InputSearch(props) {
  return (
    <input type="text" className={Style.search}/>
  )
}

export default InputSearch