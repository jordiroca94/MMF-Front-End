import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Topbar from './components/topbar/Topbar'
import Wristband from './components/wristband/Wristband'

const App = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Header/>
      <Wristband/>
    </div>
  )
}

export default App