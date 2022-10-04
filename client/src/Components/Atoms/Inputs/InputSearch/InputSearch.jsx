import React from 'react'
import Style from './inputSearch.module.css'

function InputSearch({setNameVideogame}) {
  const handleInputChange = (e) => {
    e.preventDefault();
    setNameVideogame(e.target.value);
  }
  return (
    <input type="text" className={Style.search} onChange={handleInputChange}/>
  )
}

export default InputSearch