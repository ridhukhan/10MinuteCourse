import React from 'react'
import "./Class9biggan.css"
import class9b1 from '../assets/class9.jpg'
import class9b2 from "../assets/class9.jpg"
const Class9biggan = () => {
  return (
    <div className='class9bmain'>
<div className='class9b1i'>
  <div>
    <img src={class9b1} alt="class9b1" />
   </div>
  <div className='class9b1t'>
    <h4>অর্ধ-বার্ষিক পরীক্ষা প্রস্তুতি</h4>
<button onClick={()=>window.open("https://10minuteschool.com/product/class-7-online-batch-2026/?aff=V2UNK0000f0bb&promo=ob26opp","_blank","noopener,noreferrer")}>আমি এটা কিনতে চাই</button>
    
  </div>
</div>

<div className='class9b2i'>
<div>
<img src={class9b2} alt="class9b2" />
</div>

<div className='class9b2t'>
<h4>সম্পুর্ন বছরের জন্য  প্রস্তুতি</h4>
<button onClick={()=>window.open("https://10minuteschool.com/product/class-7-online-batch-2026/?aff=V2UNK0000f0bb&promo=oppbpp26","_blank","noopener,noreferrer")}>আমি এটা কিনতে চাই</button>
</div>
</div>



    </div>
  )
}

export default Class9biggan