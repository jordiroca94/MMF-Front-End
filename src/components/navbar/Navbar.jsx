import React, { useState, useRef } from 'react'
import "./navbar.css"
import Logo from "../../assets/logo.jpg"
import {FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [activeNav,setActiveNav] = useState("#")
    const navRef = useRef();

    const showNavbar = ()=>{
      navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <header>
      <a href="#">
        <img src={Logo} alt="Profile"/>
      </a>
    <nav ref={navRef}>
        <a href='#tickets' onClick={()=> setActiveNav("#tickets")} className={activeNav === "#tickets" ? "active" : ""}>TICKETS</a>
        <a href='#camping' onClick={()=> setActiveNav("#camping")} className={activeNav === "#camping" ? "active" : ""}>CAMPING</a>
        <a href='#experience' onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}>EXPERIENCE</a>
        <a href='#lineup' onClick={()=> setActiveNav("#lineup")} className={activeNav === "#lineup" ? "active" : ""}>LINE UP </a>
        <a href='#usefulinfo' onClick={()=> setActiveNav("#usefulinfo")} className={activeNav === "#usefulinfo" ? "active" : ""}>USEFUL INFO</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
    </nav>
    <button className='nav-btn' onClick={showNavbar}><FaBars/></button>
    </header>
  )
}

export default Navbar