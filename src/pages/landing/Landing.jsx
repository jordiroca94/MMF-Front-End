import React from 'react'
import "./landing.css"
import Concerts from '../../components/concerts/Concerts'
import Header from '../../components/header/Header'
import Intro from '../../components/intro/Intro'
import Sponsors from '../../components/sponsors/Sponsors'
import Topbar from '../../components/topbar/Topbar'
import Wristband from '../../components/wristband/Wristband'

const Landing = () => {
  return (
    <>
      <Topbar/>
      <Header/>
      <Wristband/>
      <Concerts/>
      <Intro/>
      <Sponsors/>
    </>
  )
}

export default Landing