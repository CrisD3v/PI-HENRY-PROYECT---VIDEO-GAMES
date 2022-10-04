import React, { useState } from 'react'
import Style from './section.module.css'
import Genre from '../../Atoms/Genre/Genre'
import CardGroup from './../../Molecules/CardGroup/CardGroup';
import { useSelector } from 'react-redux';
import Pagination from '../../Molecules/Pagination/Pagination';
import { Link } from 'react-router-dom';


function Section({setCurrentPage , currentPage, handleSetCurrentPage}) {
  const allVgames = useSelector((state) => state.videogames)
  const allgenres = useSelector((state) => state.genres)
 
  const [page, setPage] = useState(1)
  const perPage = 15
  
  const maximo = Math.round(allVgames.length / perPage)
  const lastVgameIndex = currentPage * perPage 
  const firstVgIndex = lastVgameIndex - perPage
  const currentVgames = allVgames.slice(firstVgIndex,lastVgameIndex) 

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
    setPage(page + 1)
    window.scroll({
      top: 0
    })
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
    setPage(page - 1)
    window.scroll({
      top: 0
    })
  }



  return (
    <div className={Style.contenedor}>
      <div className={Style.sunbcontentGenre}>
        <Genre value='All Genres' item='0' key='0' handleSetCurrentPage={handleSetCurrentPage}/>
        {allgenres && allgenres.map(g => {
          return(
            <Genre value={g.name} item={g.id} key={g.id} handleSetCurrentPage={handleSetCurrentPage} />
          )
        })}
      </div>
      <div className= {Style.subContent}>
        {currentVgames && currentVgames.map(d =>{
          return(
           <Link to={`/home/${d.id}`}>
              <CardGroup
                name={d.name} image={d.image} rating={d.rating} genres={typeof d.genres === 'object'? d.genres : d.genres} key={d.id}
              /> 
           </Link>
          )
        })}
      </div>
     <div className={Style.pagination}>
        <Pagination page={maximo} actualPage={currentPage} nextPage={nextPage} prevPage={prevPage}/>
     </div>
    </div>
  )
}




export default Section