import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Landing from './pages/landing/Landing'
import Tickets from './pages/tickets/Tickets';



const App = () => {
  return (
    <>
        <Navbar/>
      	<Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/tickets" element={<Tickets />} />
        </Routes>
    </>
  )
}

export default App