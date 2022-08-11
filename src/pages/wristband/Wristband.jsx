import React from 'react'

const Wristband = () => {
  return (
    <>
      <div>
        <div>
          <h1 className='pt-14 pb-14 flex justify-center bg-red-700 text-white text-5xl font-extrabold'>INFORMATION ABOUT CASHLESS WRISTBAND</h1>
        </div>
        <section className='bg-black flex flex-col justify-center items-center'>
          <h1 className='text-red-700 text-2xl font-extrabold p-4'>THE CASHLESS WRISTBAND, THE PAYMENT METHOD AT  MMF</h1>
          <p className='text-white w-5/6'> When you arrive at MMF and show your ticket, we will give you a cashless wristband, which you must wear throughout your stay at the festival </p>
          <p className='text-white w-5/6'> This wristband is your "key" to enter and leave the festival and also the only accepted payment method at MMF. It is linked to your personal account, where you can top it up  </p>

        </section>
      </div>
    </>
  )
}

export default Wristband