import React from 'react'
import "./Class9all.css"
import class9all from '../assets/class9all.jpg'
import class9bm from "../assets/class9bm.jpg"
const Class9all = () => {
  return (
    <div className='class9allmain'>
<div className='class9alli'>
  <div>
    <img src={class9all} alt="class9all" />
   </div>
  <div className='class9allt'>
    <h4>বাংলা ইংরেজি আইসিটি</h4>
<button onClick={()=>window.open("https://10minuteschool.com/product/class-9-online-batch-2026-science-ssc-28/?aff=V2UNK0000f0bb&promo=9sciencehalf","_blank","noopener,noreferrer")}>আমি এটা কিনতে চাই</button>
    
  </div>
</div>

<div className='class9bm1i'>
<div>
<img src={class9bm} alt="class9bm" />
</div>

<div className='class9bm1t'>
<h6>বিজ্ঞান + গণিত + বাংলা +ইংরেজি আইসি</h6>
<button onClick={()=>window.open("https://10minuteschool.com/product/class-9-online-batch-2026-science-ssc-28/?aff=V2UNK0000f0bb&promo=9sciencefull","_blank","noopener,noreferrer")}>আমি এটা কিনতে চাই</button>
</div>
</div>



<div className='class9bm2i'>
<div>
<img src={class9bm} alt="class9bm" />
</div>

<div className='class9bm2t'>
<h4>বিজ্ঞান + গণিত</h4>
<button onClick={()=>window.open("https://10minuteschool.com/product/class-9-online-batch-2026-science-ssc-28/?aff=V2UNK0000f0bb&promo=9bundle26","_blank","noopener,noreferrer")}>আমি এটা কিনতে চাই</button>
</div>
</div>

    </div>
  )
}

export default Class9all