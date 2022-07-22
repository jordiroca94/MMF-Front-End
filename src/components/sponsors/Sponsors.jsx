import React from 'react'
import "./sponsors.css"
import IMG1 from "../../assets/sponsor1.png"
import IMG2 from "../../assets/sponsor2.png"
import IMG3 from "../../assets/sponsor3.png"
import IMG4 from "../../assets/sponsor4.png"
import IMG5 from "../../assets/sponsor5.png"
import IMG6 from "../../assets/sponsor6.png"
import IMG7 from "../../assets/sponsor7.png"
import IMG8 from "../../assets/sponsor8.png"
import IMG9 from "../../assets/sponsor9.png"
import IMG10 from "../../assets/sponsor10.png"
import IMG11 from "../../assets/sponsor11.webp"
import IMG12 from "../../assets/sponsor12.jpg"
import IMG13 from "../../assets/sponsor13.png"
import IMG14 from "../../assets/sponsor14.png"



const Sponsors = () => {
  return (
    <div className='sponsors__container'>
        <h1>Sponsors</h1>
        <div className='links__container'>
            <a href="https://www.vueling.com/es" target="_blank" ><img src={IMG1}/></a>
            <a href="https://www.estrelladamm.com/" target="_blank" ><img src={IMG2}/></a>
            <a href="https://apps.apple.com/US/app/id547702041?mt=8" target="_blank"><img src={IMG3}/></a>
            <a href="https://apps.apple.com/es/app/cabify/id476087442" target="_blank"><img src={IMG4}/></a>
            <a href="https://heurafoods.com/" target="_blank"><img src={IMG5}/></a>
            <a href="https://www.cocacola.es/" target="_blank"><img src={IMG6}/></a>
            <a href="https://www.negrita.es/" target="_blank"><img src={IMG7}/></a>
            <a href="https://www.redbull.com/es-es/" target="_blank"><img src={IMG8}/></a>
            <a href="https://www.idealista.com/" target="_blank"><img src={IMG9}/></a>
            <a href="https://www.jagermeister.com/" target="_blank"><img src={IMG10}/></a>
            <a href="https://open.spotify.com/" target="_blank"><img src={IMG11}/></a>
            <a href="https://www.fcbarcelona.es/es/" target="_blank"><img src={IMG12}/></a>
            <a href="https://www.cupraofficial.es/" target="_blank"><img src={IMG13}/></a>
            <a href="https://www.yamaha-motor.eu/" target="_blank"><img src={IMG14}/></a>

        </div>

    </div>
  )
}

export default Sponsors