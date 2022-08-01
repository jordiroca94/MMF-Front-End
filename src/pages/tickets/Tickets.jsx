import React from 'react'
import "./tickets.css"

const Tickets = () => {
  return (
    <div className="tickets__container ">
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-neutral-600/50  ">
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-2 text-white">One Day Ticket</div>
          <p className="text-white text-base mb-2">
          Ticked valid for One Day 
          </p>
          <p className="text-white"> 60€ + EXPENSES</p>
        </div>
      <div className="px-6 pt-4 pb-2">
        <button className="buy-button inline-block px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 border-2 border-white">BUY TICKET </button>
      </div>
    </div>
    </div>
  )
}

export default Tickets                                               