import React from 'react'
import Class6c from '../Component/Class6c'
import Class7c from "../Component/Class7c"
import Class8c from '../Component/Class8c'
import hero from "../assets/hero.jpeg"
import "./Home.css"
const Home = () => {
  return (
    <div>

 <h1 style={{justifyContent:"center", textAlign:"center" ,marginTop:"15%", color:"red"}}>টেন মিনিট স্কুল কোর্স</h1>

 <h6 style={{justifyContent:"center", textAlign:"center" ,marginTop:"5%",color:"black"}}>টেন মিনিট স্কুলের সব কোর্সে সর্বোচ্চ ডিসকাউন্ট পেতে<br /> নিচের ক্যাটাগরিগুলো থেকে আপনার পছন্দের কোর্সটি বেছে নিন। চাইলে মেনু<br /> থেকেও সহজেই কোর্স খুঁজে নিতে পারেন। ধন্যবাদ!</h6>
       <div  className='hero1'>
<div className='heroimg'>
  <img src={hero} alt="hero" />
</div>

<h3 style={{color:"red"}}>একাডেমিক পরীক্ষার সেরা প্রস্তুতি</h3>
<h6 style={{marginTop:"9px"}}>এক্সপার্ট টিচারদের রেগুলার লাইভ ক্লাস, মাস্টারবুক, মডেল টেস্ট নিয়ে সারা বছর সেরা রেজাল্টের পারফেক্ট প্ল্যান!</h6>
       
       <div className='buttons'>
        <button style={{backgroundColor:"#254e7eff"}}>Hsc 27</button>
        <button  style={{backgroundColor:"#254e7eff"}}>Hsc 26</button>
        <button>১০ম শ্রেণি</button>
        <button>৯ম শ্রেণি</button>
        <button>৮ম শ্রেণি</button>
        <button>৭ম শ্রেণি</button>
        <button  style={{backgroundColor:"#e4a622ff"}}>৬ষ্ঠ শ্রেণি</button>

       </div>
       </div>
 <h1 style={{justifyContent:"center", textAlign:"center" ,marginTop:"15%"}}>ক্লাস ৬ এর সব কোর্স</h1>
    <hr />
    <Class6c/>
    <hr style={{marginTop:"5%"}}/>
        <h1 style={{justifyContent:"center", textAlign:"center" ,marginTop:"7%"}}>ক্লাস ৭ এর সব কোর্স</h1>
<hr />

<Class7c/>
<hr style={{marginTop:"18%"}}/>
        <h1 style={{justifyContent:"center", textAlign:"center" ,marginTop:"7%"}}>ক্লাস ৮ এর সব কোর্স </h1>
<hr />
<Class8c/>
    </div>
  )
}

export default Home