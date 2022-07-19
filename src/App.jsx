import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Topbar from './components/topbar/Topbar'

const App = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Header/>
    </div>
  )
}

export default App