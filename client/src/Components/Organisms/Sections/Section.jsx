import React from 'react'
import Style from './section.module.css'
import Card from '../../Atoms/Cards/Card'

function Section() {
  return (
    <div className={Style.contenedor}>
      <div className= {Style.subContent}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Section