import React from 'react'
import "./concerts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {dataConcerts} from "./data";


const Concerts = () => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
     
        }
      },
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='concerts__container'>
    <Slider {...settings}>
        {dataConcerts.map((item)=>(
        <div key={item.id} className="card">
            <img src={item.img} alt={item.name}/>
            <div className='text__wrapper'>
            <h1>{item.name}</h1>
            <h3>{item.date}</h3>
            </div>
        </div>
        ))}
    </Slider>
    </div>
  )
}

export default Concerts