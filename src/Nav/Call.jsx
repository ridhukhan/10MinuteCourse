import React from 'react'
import whatsapp from "../assets/WhatsApp.svg.webp"
import phone from "../assets/phone.jpg"
import './Call.css'
const Call = () => {
  return (
    <div className='callmain'>
<div className='callwh' onClick={()=>window.open("https://wa.me/8801836974525","_blank")}>
    <img src={whatsapp} alt="whatsapp" />
</div>
<div className='callph' onClick={()=>window.location.href="tel:+8801836974525"}>
    <img src={phone} alt="call" />
</div>

    </div>
  )
}

export default Call