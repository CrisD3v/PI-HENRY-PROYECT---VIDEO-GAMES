import React from 'react'
import Style from './Landing.module.css'
import { Link } from "react-router-dom";
import ButtonGame from '../../Atoms/Buttons/ButtonGame/ButtonGame';

function LandingPage() {
  return (
    <div className={Style.container}>
      <Link to="/home">
        <ButtonGame text='START'/>
      </Link>
    </div>
  )
}

export default LandingPage

