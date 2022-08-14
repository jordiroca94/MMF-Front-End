import React from 'react'
import StripeCheckout from "react-stripe-checkout"
import "./tickets.css"
import axios from "axios";
import {ToastContainer,toast} from 'react-toastify'
 
const Tickets = () => {

  const [product] = React.useState({
    name: "One day Pass",
    price: 70,
    description: "awesome festival"
  });

  async function handleToken(token){
    const response = await axios.post("http://localhost:4000/payment",{
      token,product
        })

    const {status} = response.data 
    if(status ==="success"){
      toast("Success! Check your email for details",
      {type:"success"})
    }else{
      toast("Something went wrong",{
        type:"error"
      })
    }
  }

  return (
    <div className="tickets__container flex items-center flex-col">
    <ToastContainer
    autoClose={5000}
    hideProgressBar={true}
    />

    <div className='resp__tickets flex flex-row gap-14 p-10'>
      <div className="w-60 max-w-xs rounded-lg overflow-hidden shadow-lg bg-neutral-600/75  h-58 ">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-white">ONE DAY PASS</div>
            <p className="text-white text-base mb-2">
            Ticked valid for One Day 
            </p>
            <p className="text-white"> 70€ + EXPENSES</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <StripeCheckout
            stripeKey= "pk_test_51KE9D2Assk6U42WqdezWGxbrr03JFHA6uLUcrG0qj5biX0vDGKaInagINHkBnJ5r4DbEmhHkRcUvmGDYPVu4kRRk00ieMr5UnK"
            token ={handleToken}
            billingAddress
            shippingAddress
            amount = {product.price*100}
            name = {"ONE DAY PASS"}
          />
          {/* <button className="buy-button inline-block px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 border-2 border-white">BUY TICKET </button> */}
        </div>
      </div>
      <div className="resp__text__card max-w-lg rounded-lg max-h-64 overflow-hidden shadow-lg bg-neutral-600/75  ">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-white">ONE DAY TICKET PREMIUM</div>
            <p className="text-white text-base mb-2">
            Includes preferential and fast lane access, welcome drink, access to Premium areas with bar and catering service.
            </p>
            <p className="text-white"> 130€ + EXPENSES</p>
        </div>
        <div className="px-6 pb-2">
          <button className="buy-button inline-block px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 border-2 border-white">BUY TICKET </button>
        </div>
      </div>
    </div>

    <div className='resp__tickets flex flex-row gap-14 p-10'>
      <div className="w-60 max-w-xs rounded-lg overflow-hidden shadow-lg bg-neutral-600/75  h-58 ">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-white">FULL TICKET</div>
            <p className="text-white text-base mb-2">
            Ticked valid for all the festival 
            </p>
            <p className="text-white"> 180€ + EXPENSES</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="buy-button inline-block px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 border-2 border-white">BUY TICKET </button>
        </div>
      </div>
      <div className="resp__text__card max-w-lg rounded-lg max-h-64 overflow-hidden shadow-lg bg-neutral-600/75  ">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-white">FULL TICKET PREMIUM</div>
            <p className="text-white text-base mb-2">
            Includes preferential and fast lane access, welcome drink, access to Premium areas with bar and catering service.
            </p>
            <p className="text-white"> 360€ + EXPENSES</p>
        </div>
        <div className="px-6 pb-2">
          <button className="buy-button inline-block px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 border-2 border-white">BUY TICKET </button>
        </div>
      </div>
    </div>

    <div className='flex flex-row gap-14 p-10'>
    <div className="resp__text__card max-w-lg rounded-lg overflow-hidden shadow-lg bg-neutral-600/75  h-58 ">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-white">CHARGE YOUR CASHLESS WRISTBAND</div>
            <p className="text-white text-base mb-2">
            Aboid lines and charge your Wristband before to get to the festival 
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <a href="/wristband" className="buy-button inline-block px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 border-2 border-white">CHARGE </a>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Tickets                                               