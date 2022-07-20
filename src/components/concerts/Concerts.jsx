import React from 'react'
import "./concerts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {dataConcerts} from "./data";

const Concerts = () => {
  return (
    <div>
        {dataConcerts.map((item)=>(
        <div className="card">
            <div className="card__top">
            <img src={item.img} alt={item.name}/>
            <h1>{item.name}</h1>
            </div>
            <div className="card_bottom">
            <h3>{item.date}</h3>
            </div> 
        </div>
        ))}
            
    </div>
  )
}

export default Concerts