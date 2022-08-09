import React from 'react'
import "./lineup.css";

const Lineup = () => {
  return (
    <>
      <div className='lineup__container '>
        <h1 className='text-white p-24 flex justify-center text-5xl '>LINEUP 2022 </h1>
          <div className='flex flex-row justify-center gap-7 p-10'>
            <h3 className='flex content-center px-6 py-4 text-white text-5xl'>Thursday 8th</h3>
            <div className='px-6 py-4 text-white'>
              <p className='text-3xl font-extrabold'> C.TANGANA | STROMAE </p>
              <p className='text-2xl font-extrabold'> BECKY G | LOLA INDIGO | RECYCLED G </p>
              <p className='text-xl font-extrabold'> RAYDEN | KODALINE | AITANA | DORIAN | LORY MEYERS </p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Lineup