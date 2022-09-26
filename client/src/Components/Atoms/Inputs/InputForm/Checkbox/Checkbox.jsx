import React from 'react'
import Style from './checkbox.module.css'
export default function Checkbox() {
  return (
    <div>
    <label class={`${Style.togglerwrapper} ${Style.style1}`}>
      <input type='checkbox' className='{Style.checkbox}' />
      <div class={Style.togglerslider}>
        <div class={Style.togglerknob}></div>
      </div>
    </label>
  </div>
  )
}
