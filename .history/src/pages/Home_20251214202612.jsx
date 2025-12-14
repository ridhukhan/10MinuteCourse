import React from 'react'
import Class6c from '../Component/Class6c'
import Class7c from '../Component/class7c'

const Home = () => {
  return (
    <div>



        <h1 style={{justifyContent:"center", textAlign:"center" ,marginTop:"15%"}}>ক্লাস ৬ এর সব কোর্স</h1>
    <hr />
    <Class6c/>
    <hr style={{marginTop:"5%"}}/>
        <h1 style={{justifyContent:"center", textAlign:"center" ,marginTop:"7%"}}>ক্লাস ৭ এর সব কোর্স</h1>
<hr />

<Class7c/>
    </div>
  )
}

export default Home