import React, { useState } from 'react'
import "./navbarCamping.css"
import CAMPING from "../../assets/camping/camping.jpg"
import GLAMPING from "../../assets/camping/glamping.jpg"
import RV from "../../assets/camping/rv.png"


const NavbarCamping = () => {
    const [activeNav, setActiveNav] = useState(null)

  return (
    <>
    <div className='navbar__camping pt-8 pb-8 flex flex-row place-content-center gap-4'>
        <a href="#camping" onClick={()=> setActiveNav("#camping")} className={activeNav === "#camping" ? "active" : ""}>CAMPING</a>
        <a href="#glamping" onClick={()=> setActiveNav("#glamping")} className={activeNav === "#glamping" ? "active" : ""}>GLAMPING</a>
        <a href="#rv" onClick={()=> setActiveNav("#rv")} className={activeNav === "#rv" ? "active" : ""}>RV</a>
    </div>

    <section id="camping" className='h-full flex flex-col justify-center items-center '>
        <h1 className='text-2xl p-4'>BRING YOUR OWN TENT</h1>
        <img className='w-4/6' src={CAMPING}></img>
    </section>
    <section id="glamping" className='h-full'> THIS IS GLAMPING</section>
    <section id="rv" className='h-full'> THIS IS RV</section>

  </>
  )
}

export default NavbarCamping