import React from 'react'
import "./Class6c.css"
import class61 from '../assets/class61.jpeg'
import class62 from '../assets/class62.jpeg'
const Class6c = () => {
  return (
    <div className='class6main'>
<div className='class61i'>
  <div>
    <img src={class61} alt="class61" />
   </div>
  <div className='class61t'>
    <h4>অর্ধ-বার্ষিক পরীক্ষা প্রস্তুতি</h4>
<button onClick={()=>window.open("https://10minuteschool.com/product/class-6-online-batch-2026/?aff=V2UNK0000f0bb&promo=ob26opp","_blank","noopener,noreferrer")}>আমি এটা কিনতে চাই</button>

    
  </div>
</div>

<div className='class62i'>
<div>
<img src={class62} alt="class62" />
</div>

<div className='class61t'>
<h4>সম্পুর্ন বছরের জন্য  প্রস্তুতি</h4>
<button onClick={()=>window.open("https://10minuteschool.com/product/class-6-online-batch-2026/?aff=V2UNK0000f0bb&promo=oppbpp26","_blank","noopener,noreferrer")}>আমি এটা কিনতে চাই</button>
</div>
</div>



    </div>
  )
}

export default Class6c