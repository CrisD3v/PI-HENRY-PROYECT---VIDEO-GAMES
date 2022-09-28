import React, { useEffect, useState } from 'react'
import Style from './section.module.css'
import Genre from '../../Atoms/Genre/Genre'
import CardGroup from './../../Molecules/CardGroup/CardGroup';
import { useDispatch, useSelector } from 'react-redux';
import {getVideogames, getGenres}  from './../../../actions/';
import Pagination from '../../Molecules/Pagination/Pagination';


function Section() {
  const dispatch = useDispatch()
  const allVgames = useSelector((state) => state.videogames)
  const allgenres = useSelector((state) => state.genres)
  const [currentPage, setCurrentPage] = useState(1) 
  const [vgamesPerPage, setvgamesPerPage] = useState(15)
  const lastVgameIndex = currentPage * vgamesPerPage 
  const firstVgIndex = lastVgameIndex - vgamesPerPage
  const currentVgames = allVgames.slice(firstVgIndex,lastVgameIndex) 
  const [render,setRender] = useState('') 
  const actualPage = (pageNumber) => { 
      setCurrentPage(pageNumber)
  }
  useEffect (() => {
    dispatch(getVideogames())
    dispatch(getGenres())
  }, [])


  return (
    <div className={Style.contenedor}>
      <div className={Style.sunbcontentGenre}>
        {allgenres && allgenres.map(g => {
          return(
            <Genre value={g.name} item={g.id} key={g.id}/>
          )
        })}
      </div>
      <div className= {Style.subContent}>
        {currentVgames && currentVgames.map(d =>{
          return(
            <CardGroup
              name={d.name} image={d.image} rating={d.rating} genres={d.genres} key={d.id}
            />
          )
        })}
      </div>
     <div className={Style.pagination}>
        <Pagination pag='100' actualPag={currentPage}/>
     </div>
    </div>
  )
}




export default Section