import React from 'react'
import Style from './checkbox.module.css'

function Checkbox2(props) {
   const  {value,item} = props
  return (
    <div className={Style.container}>
        <ul className={Style.kscboxtags}>
            <li className={Style.list}>
                <input type="checkbox" className={Style.input} id={`checkbox${item}`} value={value} />
                <label for={`checkbox${item}`} className={Style.label}>{value}</label>
            </li>
        </ul>

    </div>
  )
}

export default Checkbox2