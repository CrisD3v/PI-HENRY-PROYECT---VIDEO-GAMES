import React, {useEffect, useState} from 'react'
import Style from './checkbox.module.css'
import { useSelector, useDispatch } from "react-redux";
import { filterByGenre, getGenres } from "../../../../../actions/index";

function Checkbox2({value, item, handleSetCurrentPage, name}) {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.genres);
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!allGenres.length) dispatch(getGenres());
  })

  const handleFilterByGenre = (e) => {
    handleSetCurrentPage();
    dispatch(filterByGenre(e.target.value));
    setEnabled(!enabled)
  }

 
  return (
    <div className={Style.container}>
        <ul className={Style.kscboxtags}>
            <li className={Style.list}>
                <input type="radio" name={name} className={Style.input} id={`checkbox${item}`} value={value} onChange={handleFilterByGenre} />
                <label htmlFor={`checkbox${item}`} className={Style.label}>{value}</label>
            </li>
        </ul>

    </div>
  )
}

export default Checkbox2