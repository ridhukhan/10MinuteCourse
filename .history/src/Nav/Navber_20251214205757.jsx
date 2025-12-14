import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
import mainLogo from "../assets/mainlogo.png"
const Navber = () => {
  return (
    <div className='navBar'>

<div className='navlogo'>
<img src={mainLogo} alt="logo"/>
</div>
<ul>
    <li><NavLink to="/Class6">CLASS 6</NavLink></li>
    <li>CLASS 7</li>
    <li>CLASS 8</li>
</ul>
</div>
  )
}

export default Navber