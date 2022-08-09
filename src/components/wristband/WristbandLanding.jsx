import React from 'react'
import "./wristbandLanding.css"
import IMG1 from "../../assets/wristband.jpg"


const WristbandLanding = () => {
  return (
    <div className='wristband__container'>
        <img src={IMG1}/>
      <div className='wristband__info'>
      <h1>INFORMATION ABOUT YOUR WRISTBAND</h1>
      <h5>Find out more info about cash refounds</h5>
      <a href="/wristband">VIEW MORE</a>
      </div>
    </div>
  )
}

export default WristbandLanding