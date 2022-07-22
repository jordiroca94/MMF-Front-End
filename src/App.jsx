import React from 'react'
import Concerts from './components/concerts/Concerts'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Sponsors from './components/sponsors/Sponsors'
import Topbar from './components/topbar/Topbar'
import Wristband from './components/wristband/Wristband'

const App = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Header/>
      <Wristband/>
      <Concerts/>
      <Intro/>
      <Sponsors/>
    </div>
  )
}

export default App