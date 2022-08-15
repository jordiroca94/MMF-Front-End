import React from 'react';
import OPENARMS from "../../assets/openArms.png";
import "./wristband.css";

const Wristband = () => {
  return (
    <>
      <div className='resp__wristband__container'>
        <div>
          <h1 className='p-14 flex justify-center bg-red-700 text-white text-5xl font-extrabold'>INFORMATION ABOUT CASHLESS WRISTBAND</h1>
        </div>
        <section className='bg-black flex flex-col justify-center items-center'>
          <h2 className='text-red-700 text-3xl font-extrabold p-8'>THE CASHLESS WRISTBAND, THE PAYMENT METHOD AT  MMF</h2>
          <p className='text-white w-5/6 text-lg p-4'> When you arrive at MMF and show your ticket, we will give you a cashless wristband, which you must wear throughout your stay at the festival </p>
          <p className='text-white w-5/6 text-lg p-4'> This wristband is your "key" to enter and leave the festival and also the only accepted payment method at MMF. It is linked to your personal account, where you can top it up  </p>
          <p className='text-white w-5/6 text-lg p-4 '>To reduce lines and waiting time, if you have a Full Pass, you can pick up your cashless wristband at Parc del Forum on Thursday 8th and Friday 9th from 3pm until 10pm.</p>
          <p className='text-white w-5/6 text-lg p-4'>You will only be able to pick up your own wristband, which we will put on your wrist when you show your ticket and you will have to wear it until you leave the venue on the last day</p>
        </section>
        <section className='bg-black flex flex-col justify-center items-center'>
          <h2 className='text-red-700 text-3xl font-extrabold p-8'>ABOUT THE REFUND OF THE REMAINING AMOUNT ON THE WRISTBAND</h2>
          <p className='text-white w-5/6 text-lg p-4'>If you created your personal account and always topped up online, you should know that the amount remaining on your wristband has already been refunded to you automatically and commission-free. If the remaining amount is less than 3€, it will be been donated to Open Arms. </p>
          <img className='w-60 h-60 p-8' src={OPENARMS} alt="open Arms"></img>
        </section>
      </div>
    </>
  )
}

export default Wristband