import React from 'react'
import PrevButton from '../../Atoms/Buttons/PaginationButton/PrevButton';
import InputPagination from '../../Atoms/Inputs/inputPagination/InputPagination';
import NextButton from './../../Atoms/Buttons/PaginationButton/NextButton';
import Style from './pagination.module.css'


function Pagination({pag, actualPag}) {
  return (
    <div className={Style.container}>
        <PrevButton/>
        <InputPagination value={actualPag}/>
        <p>DE {pag}</p>
        <NextButton/>
    </div>
  )
}

export default Pagination