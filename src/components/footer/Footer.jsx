import React from 'react'
import "./footer.css"
import {SiInstagram} from "react-icons/si"
import {FaFacebookSquare} from "react-icons/fa"
import {TbBrandTwitter} from "react-icons/tb"
import {SiYoutube} from "react-icons/si"
import {SiSpotify} from "react-icons/si"
import {BsArrowUpShort} from "react-icons/bs"

// ALL THE FOOTER LINKS ARE REDIRECTING TO MY GITHUB BECAUSE I DID NOT WANT TO USE MY PERSONAL SOCIAL NETWORKS :) 

const Footer = () => {
  return (
    <footer className='footer__container'>
        <div className='footer__socials'>
            <a href="https://www.instagram.com/ohmymusicfest" target="_blank" rel="noreferrer"><SiInstagram/></a>
            <a href="https://www.facebook.com/ohmymusicfestival/" target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
            <a href="https://twitter.com/ohmymusicfest" target="_blank" rel="noreferrer"><TbBrandTwitter/></a>
            <a href="https://www.youtube.com/watch?v=28sAg7-yBTg&t=6s" target="_blank" rel="noreferrer"><SiYoutube/></a>
            <a href="https://open.spotify.com/playlist/1OxYkJ6HGnKyKbgopVJaeK" target="_blank" rel="noreferrer"><SiSpotify/></a>
        </div>
        <div className='scroll__up__wrapper'>
        <a className='scroll__up' href="#"><BsArrowUpShort/></a>
        </div>
        <div className="footer__copyright">
        <small> Copyright &copy; 2022 Jordi Roca All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer