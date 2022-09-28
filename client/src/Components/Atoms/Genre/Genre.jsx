import React from 'react'
import Checkbox2 from '../Inputs/InputForm/Checkbox/Checkbox2'

function Genre(props) {
    const {value, item} = props
  return (
    <Checkbox2 value ={value} item={item}/>
  )
}

export default Genre