import React from 'react'
import "./sponsors.css"
import IMG1 from "../../assets/sponsors/sponsor1.png"
import IMG2 from "../../assets/sponsors/sponsor2.png"
import IMG3 from "../../assets/sponsors/sponsor3.png"
import IMG4 from "../../assets/sponsors/sponsor4.png"
import IMG5 from "../../assets/sponsors/sponsor5.png"
import IMG6 from "../../assets/sponsors/sponsor6.png"
import IMG7 from "../../assets/sponsors/sponsor7.png"
import IMG8 from "../../assets/sponsors/sponsor8.png"
import IMG9 from "../../assets/sponsors/sponsor9.png"
import IMG10 from "../../assets/sponsors/sponsor10.png"
import IMG11 from "../../assets/sponsors/sponsor11.webp"
import IMG12 from "../../assets/sponsors/sponsor12.jpg"
import IMG13 from "../../assets/sponsors/sponsor13.png"
import IMG14 from "../../assets/sponsors/sponsor14.png"



const Sponsors = () => {
  return (
    <div className='sponsors__container'>
        <h1 className='text-3xl font-bold'>Sponsors</h1>
        <div className='links__container'>
            <a href="https://www.vueling.com/es" target="_blank" rel="noreferrer"><img src={IMG1} alt="vueling"/></a>
            <a href="https://www.estrelladamm.com/" target="_blank" rel="noreferrer"><img src={IMG2} alt="estrella-damm"/></a>
            <a href="https://apps.apple.com/US/app/id547702041?mt=8" target="_blank" rel="noreferrer"><img src={IMG3} alt="tinder"/></a>
            <a href="https://apps.apple.com/es/app/cabify/id476087442" target="_blank" rel="noreferrer"><img src={IMG4} alt="cabify"/></a>
            <a href="https://heurafoods.com/" target="_blank" rel="noreferrer"><img src={IMG5} alt="heura"/></a>
            <a href="https://www.cocacola.es/" target="_blank" rel="noreferrer"><img src={IMG6} alt="coca-cola"/></a>
            <a href="https://www.negrita.es/" target="_blank" rel="noreferrer"><img src={IMG7} alt="negrita"/></a>
            <a href="https://www.redbull.com/es-es/" target="_blank" rel="noreferrer"><img src={IMG8} alt="red-bull"/></a>
            <a href="https://www.idealista.com/" target="_blank" rel="noreferrer"><img src={IMG9} alt="idealista"/></a>
            <a href="https://www.jagermeister.com/" target="_blank" rel="noreferrer"><img src={IMG10} alt="jagermeister"/></a>
            <a href="https://open.spotify.com/" target="_blank" rel="noreferrer"><img src={IMG11} alt="spotify"/></a>
            <a href="https://www.fcbarcelona.es/es/" target="_blank" rel="noreferrer"><img src={IMG12} alt="fcb"/></a>
            <a href="https://www.cupraofficial.es/" target="_blank" rel="noreferrer"><img src={IMG13} alt="cupra"/></a>
            <a href="https://www.yamaha-motor.eu/" target="_blank" rel="noreferrer"><img src={IMG14} alt="yamaha"/></a>

        </div>

    </div>
  )
}

export default Sponsors