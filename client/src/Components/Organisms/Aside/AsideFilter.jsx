import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Style from './asidefilter.module.css'
import Rating from '../../Molecules/AsideOrder/Rating';
import ApiOrDb from '../../Molecules/AsideOrder/ApiOrDb';
import Alfabetico from './../../Molecules/AsideOrder/Alfabetico';

function AsideFilter() {
  const [isActive1, setIsActive1] = useState(false)
  const [isActive2, setIsActive2] = useState(false)
  const [isActive3, setIsActive3] = useState(false)
  return  (
    <div className={Style.container}>

       <div className={Style.dropDownItem} onClick={e=> setIsActive1(!isActive1)}>
            <span className={Style.text}>Alfabetico</span>
        </div>

        {isActive1 && (
            <Alfabetico/>
        )}

        <div className={Style.dropDownItem}  onClick={e=> setIsActive2(!isActive2)}>
            <span className={Style.text}>Rating</span>
        </div>

        {isActive2 && (
            <Rating/>
        )}

        <div className={Style.dropDownItem} onClick={e=> setIsActive3(!isActive3)}>
            <span className={Style.text}>Api or Db</span>
        </div>

        {isActive3 && (
            <ApiOrDb/>
        )}

    </div>
  )
}

export default AsideFilter

