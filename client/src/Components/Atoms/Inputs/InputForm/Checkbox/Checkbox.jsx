import React, { useState } from 'react'
import Style from './checkbox.module.css'
import { useDispatch } from "react-redux";
import {sortByRating, alphabeticalSort, filterByApiOrDb} from '../../../../../actions/index'
export default function Checkbox({handleSetCurrentPage, value, valueFil, id , name}) {
  const dispatch = useDispatch();
  const [enabled, setEnabled] = useState(false)

  const handleSortByRating = (e) => {
    handleSetCurrentPage();
    dispatch(sortByRating(e.target.value));
    setEnabled(!enabled)
  }

  const handleAlphabeticalSort = (e) => {
    handleSetCurrentPage();
    dispatch(alphabeticalSort(e.target.value));
    setEnabled(!enabled)
  }

  const handleFilterByApiOrDb = (e) => {
    handleSetCurrentPage();
    dispatch(filterByApiOrDb(e.target.value));
    setEnabled(!enabled)
  }



  return (
    <div className='container1'>
    <p className={Style.text}>{value}</p>
    <label class={`${Style.togglerwrapper} ${Style.style1}`}>
      <input 
        type='radio' className='{Style.checkbox}' name={name}
        value={valueFil} onChange={id === 'rating' ? (e) => handleSortByRating(e): 
                                  id === 'alfabetic'? (e) => handleAlphabeticalSort(e): (e) => handleFilterByApiOrDb(e)} 
      />
      <div class={Style.togglerslider}>
        <div class={Style.togglerknob}></div>
      </div>
    </label>
  </div>
  )
}
