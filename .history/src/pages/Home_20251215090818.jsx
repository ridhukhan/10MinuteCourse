import React from 'react'
import Class6c from '../Component/Class6c'
import Class7c from "../Component/Class7c"
import Class8c from '../Component/Class8c'

const Home = () => {
  return (
    <div>

 <h1 style={{justifyContent:"center", textAlign:"center" ,marginTop:"15%", color:"red"}}>টেন মিনিট স্কুল কোর্স</h1>

 <h6 style={{justifyContent:"center", textAlign:"center" ,marginTop:"5%"}}>টেন মিনিট স্কুলের সব কোর্সে সর্বোচ্চ ডিসকাউন্ট পেতে<br /> নিচের ক্যাটাগরিগুলো থেকে আপনার পছন্দের কোর্সটি বেছে নিন। চাইলে মেনু<br /> থেকেও সহজেই কোর্স খুঁজে নিতে পারেন। ধন্যবাদ!</h6>
       
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