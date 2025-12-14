import React from 'react'
import whatsapp from "../assets/WhatsApp.svg.webp"
import phone from "../assets/phone.jpg"
import './Call.css'
const Call = () => {
  return (
    <div className='callmain'>
<div className='callwh'>
    <img src={whatsapp} alt="whatsapp" />
</div>
<div className='callph'>
    <img src={phone} alt="call" />
</div>

    </div>
  )
}

export default Call