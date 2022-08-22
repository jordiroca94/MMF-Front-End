import React from 'react'
import "./camping.css"
import CAMPING from "../../assets/camping/camping.jpg"
import GLAMPING from "../../assets/camping/glamping.jpg"
import RV from "../../assets/camping/rv.png"

const sectionsCamping = () => {
  return (
    <div className=' bg-black text-white'>
        <div id='camping' className='w-full h-20'></div>
        <section className='h-full flex flex-col justify-center items-center '>
            <h1 className='text-4xl p-4'>BRING YOUR OWN TENT</h1>
            <img className='w-3/6' src={CAMPING} alt="camping"></img>
            <p className='p-3 text-xl w-3/6 pt-6'>The Forest Glow Camp MMF experience comes back to Barcelona! Camping included with MMF Full Pass  </p>
        </section>
        <div id="glamping" className='w-full h-20'></div>
        <section className='h-full flex flex-col justify-center items-center'> 
            <h1 className='text-4xl p-4'>USE OUR CHARMING TENTS</h1>
            <img className='w-3/6' src={GLAMPING} alt="glamping"></img>
            <p className='p-3 text-xl w-3/6 pt-6'>This MMF enjoy a luxury experience by staying at the festival's glamping area. Discover all the options  on offer and choose the one that best suits your needs. Don't miss this opportunity to enjoy accommodation with all the amenities of a hotel, but under the stars.</p>
            <br></br>
            <p className='text-lg'>Rest like a king so you can give your all at the concerts!</p>
            <h3 className='text-lg'>For further information: <a className='email__link' href="mailto:glamping@mymusicfestival.com" target="_blank" rel='noreferrer'>glamping@mymusicfestival.com</a></h3>
        </section>
        <div id="rv" className='w-full h-20'></div>
        <section className='h-full flex flex-col justify-center items-center'>
            <h1 className='text-4xl p-4'>BRING YOUR HOME ON WHEELS</h1>
            <img className='w-3/6' src={RV} alt="rv"></img>
            <p className='p-3 text-xl w-3/6 pt-6'>Drive your own RV on-site! Camp MMF offers a power hookup, RV water refills, and pump-outs for an extra charge. RV groups will be limited to the vehicle specific sleeping capacity, up to a maximum of 8 people per RV site.</p>
            <h3 className='text-lg'>For further information: <a className='email__link' href="mailto:rv-camping@mymusicfestival.com" target="_blank" rel='noreferrer'>rv-camping@mymusicfestival.com</a></h3>
        </section>
    </div>
  )
}

export default sectionsCamping