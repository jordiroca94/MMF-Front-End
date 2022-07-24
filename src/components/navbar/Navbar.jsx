import React, { useState } from 'react'
import "./navbar.css"
import Logo from "../../assets/logo.jpg"

const Navbar = () => {
    const [activeNav,setActiveNav] = useState("#")

  return (
    <nav className='navbar__container'>
    <a href="#">
    <img src={Logo} alt="Profile"/>
    </a>
    <div className='navbar__links__wrap'>
        <a href='#tickets' onClick={()=> setActiveNav("#tickets")} className={activeNav === "#tickets" ? "active" : ""}>TICKETS</a>
        <a href='#camping' onClick={()=> setActiveNav("#camping")} className={activeNav === "#camping" ? "active" : ""}>CAMPING</a>
        <a href='#experience' onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}>EXPERIENCE</a>
        <a href='#lineup' onClick={()=> setActiveNav("#lineup")} className={activeNav === "#lineup" ? "active" : ""}>LINE UP </a>
        <a href='#usefulinfo' onClick={()=> setActiveNav("#usefulinfo")} className={activeNav === "#usefulinfo" ? "active" : ""}>USEFUL INFO</a>
    </div>
    </nav>
  )
}

export default Navbar