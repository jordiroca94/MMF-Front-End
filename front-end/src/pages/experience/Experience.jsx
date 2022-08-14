import React from 'react'
import "./experience.css"
import IMG1 from "../../assets/background6.png"

const Experience = () => {
  return (
    <>
    <div className='experience__container'>
        <img src={IMG1} alt="my-music-festival"/>
        <div className='experience__resp w-screen bg-black flex flex-col px-20'>
            <h1 className='text-white p-24 flex justify-center text-5xl '>WELCOME TO MY MUSIC FESTIVAL </h1>
            <p className='text-white text-xl'>My Music Festival will be held on September 8,9 and 10 of 2022 at Parc del Fòrum in Barcelona. An emblematic city and an unbeatable setting:outdoors, facing the sea </p>
            <br></br>
            <p className='text-white text-xl'>This is an unrepeatable experience. Based on music and accompanied by arts and commedy shows</p>
            <br></br>
            <p className='text-white text-xl pb-8 border__line'>Enjoy the best night of the summer with a day ticket. Or get a Full pass to live the whole experience.</p>
            <div>
                <h1 className='text-white flex justify-center text-3xl p-8'>Get your tickets here</h1>
                <div className='flex justify-center'>
                <a href='/tickets' className='ticket__button  text-white flex justify-center text-xl p-4'>TICKETS</a>
                </div>
                <p className='text-white text-xl pb-8 border__line'></p>
            </div>
            <p className='text-white text-xl pt-6'>What we experienced in the first week of September is not a conventional festival. It is a whole life. It is a place designed to experience the best of summer. you can enjoy a good conversation while eating some of the most iconic spanish and Mediterranean gastronomy while having some beers. You can also laugh at the best comedy shows while you contemplate some of the best European art. </p>
            <br></br>
            <p className='text-white text-xl'>Because My Music Festival means freedom, happiness and a guaranteed party. And this year MMF means dancing, jumping, enjoying, sharing and caring.</p>
            <p className='text-white text-xl pt-6'>Originally from Dutch lands now is time to move MMF to one of the most international European cities</p>
            <div className='flex justify-center p-10'>
                <iframe width="900" height="500" src="https://www.youtube.com/embed/28sAg7-yBTg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p className='flex justify-center text-white text-xl pt-6'>Do not miss it and become part of our next aftermovie</p>
        </div>

    </div>
    </>
  )
}

export default Experience