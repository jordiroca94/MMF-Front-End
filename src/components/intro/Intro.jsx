import React from 'react'
import "./intro.css"
import IMG1 from "../../assets/background4.png"

const Intro = () => {
  return (
    <div className='intro__container'>
        <img src={IMG1} alt="my-music-festival"/>
         <div className='text__container'>
            <h2 className='text-2xl pl-2'>MY MUSIC FESTIVAL</h2>
            <p> My music Festival will rock Barcelona from 6 to 9th of September in Parc del Forum of Barcelona. An emblematic city in the best location possible: outdoors in front of the sea. Be ready for an unbeatable experience. Based on music, art and performance. </p>
         </div>
    </div>
  )
}

export default Intro