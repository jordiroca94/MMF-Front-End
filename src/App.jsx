import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Camping from './pages/camping/Camping';
import Landing from './pages/landing/Landing'
import Tickets from './pages/tickets/Tickets';



const App = () => {
  return (
    <>
        <Navbar/>
      	<Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/tickets" element={<Tickets/>} />
          <Route exact path="/camping" element={<Camping/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App