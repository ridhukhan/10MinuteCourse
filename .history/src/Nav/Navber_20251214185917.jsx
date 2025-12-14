import React from 'react'
import "./Navbar.css"
import mainLogo from "../assets/mainlogo.png"
const Navber = () => {
  return (
    <div className='navBar'>

<div className='navlogo'>
<img src={mainLogo} alt="logo"/>
</div>
<ul>
    <li>CLASS 6</li>
    <li>CLASS 7</li>
    <li>CLASS 8</li>
</ul>
</div>
  )
}

export default Navber