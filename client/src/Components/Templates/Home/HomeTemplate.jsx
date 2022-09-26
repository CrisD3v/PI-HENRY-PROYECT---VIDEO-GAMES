import React, { useState } from 'react'
import Navbar from '../../Organisms/Nav/Navbar'
import Section from '../../Organisms/Sections/Section'
import AsideFilter from '../../Organisms/Aside/AsideFilter'


function HomeTemplate(props) {
  return (
    <div>
        <Navbar/>
        <Section/>
    </div>
  )
}

export default HomeTemplate