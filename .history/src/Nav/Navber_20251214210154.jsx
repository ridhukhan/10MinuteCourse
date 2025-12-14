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
    <li><NavLink to="/" className="nav-menu">HOME</NavLink></li>

    <li><NavLink to="/Class6" className="nav-menu">CLASS 6</NavLink></li>
    <li><NavLink to="/Class7" className="nav-menu">CLASS 7</NavLink></li>
    <li><NavLink to="/Class8" className="nav-menu">CLASS 8</NavLink></li>
 
</ul>
</div>
  )
}

export default Navber