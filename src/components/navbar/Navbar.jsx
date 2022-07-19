import React from 'react'
import "./navbar.css"
import Logo from "../../assets/logo.jpg"

const Navbar = () => {
  return (
    <nav className='navbar__container'>
    <img src={Logo} alt="Profile"/>
    <div className='navbar__links__wrap'>
        <a href='#'>TICKETS</a>
        <a href='#'>CAMPING</a>
        <a href='#'>EXPERIENCE</a>
        <a href='#'>LINE UP </a>
        <a href='#'>USEFUL INFO</a>
    </div>
    </nav>
  )
}

export default Navbar