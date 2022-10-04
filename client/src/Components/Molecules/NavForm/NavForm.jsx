import React, {useState} from 'react'
import InputSearch from '../../Atoms/Inputs/InputSearch/InputSearch'
import SimpleButton from '../../Atoms/Buttons/SimpleButtons/SimpleButton'
import { getVideogamesByName, resetVideogames } from "../../../actions/index";
import { useDispatch } from 'react-redux';

function NavForm({handleSetCurrentPage}) {
  const dispatch = useDispatch()
  const [nameVideogame, setNameVideogame] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (nameVideogame.trim().length) {
      handleSetCurrentPage();
      dispatch(resetVideogames());
      dispatch(getVideogamesByName(nameVideogame.trim()));
      setNameVideogame("");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
        <InputSearch setNameVideogame={setNameVideogame}/>
        <SimpleButton value='SEARCH'/>
    </form>
  )
}

export default NavForm