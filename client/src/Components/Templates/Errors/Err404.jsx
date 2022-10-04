import React from 'react'
import gif from '../../../images/404gif.gif'
import Style from './errors.module.css'
import { resetVideogames, getVideogames } from './../../../actions/index';
import { useDispatch } from 'react-redux';

function Err404({handleSetCurrentPage}) {
  const dispatch = useDispatch();
  
  const handlerRefresh = (e) => {
    e.preventDefault();
    handleSetCurrentPage();
    dispatch(resetVideogames())
    dispatch(getVideogames())
  }

  return (
    <div className={Style.container}>
      <img src={gif} alt="gif" />
      <div className={Style.button}>
          <button className={Style.btn} onClick={handlerRefresh}>Go Back</button>
      </div>
    </div>
  )
}

export default Err404