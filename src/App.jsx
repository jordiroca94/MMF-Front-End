import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Camping from './pages/camping/Camping';
import Experience from './pages/experience/Experience';
import Landing from './pages/landing/Landing'
import Lineup from './pages/lineup/Lineup';
import Tickets from './pages/tickets/Tickets';
import UsefulInfo from './pages/useful-info/UsefulInfo';
import Wristband from './pages/wristband/Wristband';




const App = () => {
  return (
    <>
        <Navbar/>
      	<Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/tickets" element={<Tickets/>} />
          <Route exact path="/wristband" element={<Wristband/>} />
          <Route exact path="/camping" element={<Camping/>} />
          <Route exact path="/experience" element={<Experience/>} />
          <Route exact path="/lineup" element={<Lineup/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App