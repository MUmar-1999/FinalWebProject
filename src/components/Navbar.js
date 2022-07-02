import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Navbar = () => {
  return (
      <nav className='Navbar'>
          <div className='Navbar_text'>
              <div className='logo'>
                  <img src="/img/lo.webp" alt='logo' />
                </div>
              <ul className='Navbar_ul'>
                  <li><Link to='/'>Home</Link></li>
                   <li><Link to='/prices'>Products</Link> </li>
          <li><Link to='/sign-in'>Sign-in</Link></li>
                  <li><Link to='/About'>About Us</Link></li> 
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/add'>Add Reviews</Link></li>
          <li><Link to='/view'>All Reviews</Link></li>
              </ul>
              
          </div>
     
     </nav>
  )
}

export default Navbar