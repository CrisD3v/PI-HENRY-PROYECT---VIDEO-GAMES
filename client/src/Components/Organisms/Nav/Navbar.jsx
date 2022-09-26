import React, { useState } from 'react'
import Logo from '../../Atoms/Logo/Logo'
import NavForm from '../../Molecules/NavForm/NavForm'
import Style from './navbar.module.css'
import { Link } from "react-router-dom";
import {IoMdArrowDropdown} from 'react-icons/io'
import AsideFilter from '../Aside/AsideFilter';

function Navbar() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div>
        <nav className={Style.navContent}>
            <Logo/>
            <NavForm/>
            <div className={Style.container}>
                <ul className={Style.subcontainer}>
                    <li className={Style.text} onClick={e=> setIsActive(!isActive)}>Filter<IoMdArrowDropdown/></li>
                    {isActive && (
                      <AsideFilter/>
                    )}
                    <Link to='' className={Style.text}><li>ADD GAME</li></Link>
                </ul>
            </div>
        </nav>
    </div>
  )
}



export default Navbar