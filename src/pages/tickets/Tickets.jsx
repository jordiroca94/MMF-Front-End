import React, {useState} from 'react'
import StripeCheckout from "react-stripe-checkout"
import "./tickets.css"
import axios from "axios";
import {ToastContainer,toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css";
import { css } from "glamor";


let toastId = null;

function displayToast() {
  if (!toast.isActive(toastId)) {
    console.log("Displaying Toast");
    toastId = toast("Hello!", {
      className: css({
        background: "#00FF00 !important",
        color: "white !important",
        fontWeight: "bold"
      }),
      closeOnClick: false,
      toastId: "my_toast",
      autoClose: true,
      closeButton: false,
      position: toast.POSITION.BOTTOM_CENTER
    });
  } else {
    console.log("Toast already active");
  }
}
 
const Tickets = () => {

  const [product] = useState({
    name: "ONE DAY TICKET",
    price: 70,
  });

  async function handleToken(token){
    const response = await axios.post("http://localhost:4000/payment",{
      token,product
        })

    const {status} = response.data 
    if(status ==="success"){
      toast("Purchase done Successfully!",
      {type:"success"})
    }else{
      toast("Something went wrong",{
        type:"error"
      })
    }
  }

  return (
    <div className="tickets__container flex items-center flex-col">
    <ToastContainer position="top-right"/>
    <div className='resp__tickets flex flex-row gap-14 p-10'>
      <div className="w-60 max-w-xs rounded-lg overflow-hidden shadow-lg bg-neutral-600/75  h-58 ">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-white">ONE DAY TICKET</div>
            <p className="text-white text-base mb-2">
            Ticked valid for One Day 
            </p>
            <p className="text-white"> 70 €</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <StripeCheckout onClick={displayToast()}
            label="BUY TICKET"
            stripeKey= "pk_test_51KE9D2Assk6U42WqdezWGxbrr03JFHA6uLUcrG0qj5biX0vDGKaInagINHkBnJ5r4DbEmhHkRcUvmGDYPVu4kRRk00ieMr5UnK"
            token ={handleToken}
            billingAddress
            shippingAddress
            currency = "EUR"
            amount = {product.price *100}
            name = {product.name}
            receipt_email
          />
        </div>
      </div>
      <div className="resp__text__card max-w-lg rounded-lg max-h-64 overflow-hidden shadow-lg bg-neutral-600/75  ">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-white">ONE DAY PREMIUM TICKET</div>
            <p className="text-white text-base mb-2">
            Includes preferential and fast lane access, welcome drink, access to Premium areas with bar and catering service.
            </p>
            <p className="text-white"> 130 €</p>
        </div>
        <div className="px-6 pb-2">
        <StripeCheckout onClick={displayToast}
            label="BUY TICKET"
            stripeKey= "pk_test_51KE9D2Assk6U42WqdezWGxbrr03JFHA6uLUcrG0qj5biX0vDGKaInagINHkBnJ5r4DbEmhHkRcUvmGDYPVu4kRRk00ieMr5UnK"
            token ={handleToken}
            billingAddress
            shippingAddress
            currency = "EUR"
            amount = {130*100}
            name = {"ONE DAY PREMIUM TICKET"}
            receipt_email
          />        
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
            <p className="text-white"> 180 €</p>
        </div>
        <div className="px-6 pt-4 pb-2">
        <StripeCheckout onClick={displayToast}
            label="BUY TICKET"
            stripeKey= "pk_test_51KE9D2Assk6U42WqdezWGxbrr03JFHA6uLUcrG0qj5biX0vDGKaInagINHkBnJ5r4DbEmhHkRcUvmGDYPVu4kRRk00ieMr5UnK"
            token ={handleToken}
            billingAddress
            shippingAddress
            currency = "EUR"
            amount = {180*100}
            name = {"FULL TICKET"}
            receipt_email
          />  
        </div>
      </div>
      <div className="resp__text__card max-w-lg rounded-lg max-h-64 overflow-hidden shadow-lg bg-neutral-600/75  ">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-white">FULL PREMIUM TICKET</div>
            <p className="text-white text-base mb-2">
            Includes preferential and fast lane access, welcome drink, access to Premium areas with bar and catering service.
            </p>
            <p className="text-white"> 360 €</p>
        </div>
        <div className="px-6 pb-2">
        <StripeCheckout onClick={displayToast}
            label="BUY TICKET"
            stripeKey= "pk_test_51KE9D2Assk6U42WqdezWGxbrr03JFHA6uLUcrG0qj5biX0vDGKaInagINHkBnJ5r4DbEmhHkRcUvmGDYPVu4kRRk00ieMr5UnK"
            token ={handleToken}
            billingAddress
            shippingAddress
            currency = "EUR"
            amount = {360*100}
            name = {"FULL TICKET PREMIUM"}
            receipt_email
          /> 
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