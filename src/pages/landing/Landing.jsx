import React from 'react'
import "./landing.css"
import Concerts from '../../components/concerts/Concerts'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Intro from '../../components/intro/Intro'
import Navbar from '../../components/navbar/Navbar'
import Sponsors from '../../components/sponsors/Sponsors'
import Topbar from '../../components/topbar/Topbar'
import Wristband from '../../components/wristband/Wristband'

const Landing = () => {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <Header/>
      <Wristband/>
      <Concerts/>
      <Intro/>
      <Sponsors/>
      <Footer/>
    </>
  )
}

export default Landing