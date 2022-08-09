import React from 'react'
import "./landing.css"
import Concerts from '../../components/concerts/Concerts'
import Header from '../../components/header/Header'
import Intro from '../../components/intro/Intro'
import Sponsors from '../../components/sponsors/Sponsors'
import Topbar from '../../components/topbar/Topbar'
import WristbandLanding from '../../components/wristband/WristbandLanding'

const Landing = () => {
  return (
    <>
      <Topbar/>
      <Header/>
      <WristbandLanding/>
      <Concerts/>
      <Intro/>
      <Sponsors/>
    </>
  )
}

export default Landing