import React from 'react'
import InputSearch from '../../Atoms/Inputs/InputSearch/InputSearch'
import SimpleButton from '../../Atoms/Buttons/SimpleButtons/SimpleButton'

function NavForm() {
  return (
    <form>
        <InputSearch/>
        <SimpleButton value='SEARCH'/>
    </form>
  )
}

export default NavForm