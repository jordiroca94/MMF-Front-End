import React from 'react'
import "./lineup.css";

const lineupData = [
  {
    id:1,
    day: "THURSDAY 8th",
    mainArtists: "C.TANGANA | STROMAE",
    secondArtists:"BECKY G | LOLA INDIGO | ELADIO CARRION",
    otherArtists: "RAYDEN | KODALINE | AITANA | DORIAN | LORY MEYERS",
    otherArtists2: "BAD GYAL | CHILL MAFIA | IDLE | PEGGY GOU | FRED AGAIN",
  },
  {
    id:2,
    day: "\u00A0\u00A0\u00A0\u00A0 FRIDAY 9th\u00A0\u00A0\u00A0\u00A0",
    mainArtists: "DUA LIPA | BIZARRAP",
    secondArtists:"CHARLOTE DE WITTE | ROSALIA | PEGGY GOU",
    otherArtists: "PAU VALLVE | MAF | RECYCLED J | AMELIE LENS | JAMIE JONES",
    otherArtists2: "ZEDD | KYGO | INNA | ANGERFIRST | RAFAEL",
  },
  {
    id:3,
    day: "\u00A0SATURDAY 10th\u00A0\u00A0",
    mainArtists: "JORDI RS | DAVID GUETTA",
    secondArtists:"NINA KRAVIZ | FISHER | THE KILLERS",
    otherArtists: "DUKI | RIOT TENS | CLAPTONE | MORAD | ADAM BEYER",
    otherArtists2: "LEN FAKI | GREEN VELVET | DJ SNAKE | DEORRO | ALAN WALKER",
  },
]

const Lineup = () => {

  return (
    <>
      <div className='lineup__container '>
        <h1 className='text-white px-24 pt-24 flex justify-center text-5xl '>LINEUP 2022 </h1>
        {
          lineupData.map(({id,day,mainArtists,secondArtists,otherArtists,otherArtists2})=>{
            return(
          <div key={id} className='resp__lineup flex flex-row justify-center gap-7 p-10'>
            <h3 className='flex items-center px-6 py-4 text-white text-5xl'>{day}</h3>
            <div className='px-6 py-4 text-white'>
              <p className='text-4xl font-extrabold'>{mainArtists}</p>
              <p className='text-2xl font-extrabold'>{secondArtists}</p>
              <p className='text-lg font-extrabold'>{otherArtists}</p>
              <p className='text-lg font-extrabold'>{otherArtists2}</p>
            </div>
          </div>
            )})
        }
      </div>
    </>
  )
}

export default Lineup