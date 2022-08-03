import React, { useState } from 'react'
import "./navbarCamping.css"

const NavbarCamping = () => {
    const [activeNav, setActiveNav] = useState(null)

  return (
    <>
    <div className='navbar__camping pt-8 pb-8 flex flex-row place-content-center gap-4'>
        <a href="#camping" onClick={()=> setActiveNav("#camping")} className={activeNav === "#camping" ? "active" : ""}>CAMPING</a>
        <a href="#glamping" onClick={()=> setActiveNav("#glamping")} className={activeNav === "#glamping" ? "active" : ""}>GLAMPING</a>
        <a href="#rv" onClick={()=> setActiveNav("#rv")} className={activeNav === "#rv" ? "active" : ""}>RV</a>
    </div>
    <section id="camping"> THIS IS CAMPING</section>
    <section id="glamping"> THIS IS GLAMPING</section>
    <section id="rv"> THIS IS RV</section>

  </>
  )
}

export default NavbarCamping