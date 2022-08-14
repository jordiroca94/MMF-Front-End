import React, {useRef } from 'react'
import "./navbar.css"
import Logo from "../../assets/logo.jpg"
import {FaBars,FaTimes} from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const activeTab = location.pathname.split("/")[1]
    const navRef = useRef();

    const showNavbar = ()=>{
      navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <header>
      <a href="/">
        <img src={Logo} alt="Profile"/>
      </a>
    <nav ref={navRef}>
        <a href='/tickets' className={activeTab === "tickets" ? "active" : ""}>TICKETS</a>
        <a href='/camping' className={activeTab === "camping" ? "active" : ""}>CAMPING</a>
        <a href='/wristband' className={activeTab === "wristband" ? "active" : ""}>WRISTBAND</a>
        <a href='/experience' className={activeTab === "experience" ? "active" : ""}>EXPERIENCE</a>
        <a href='/lineup' className={activeTab === "lineup" ? "active" : ""}>LINEUP </a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
    </nav>
    <button className='nav-btn' onClick={showNavbar}><FaBars/></button>
    </header>
  )
}

export default Navbar