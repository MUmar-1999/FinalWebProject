import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Shop = () => {
  return (
      <div className='Shop'>
          <div className='Container'>
              <div className='Shop_Text'>
                  <h1>Delivery all over the World</h1>
                  <div className='shop_btn'>
                      <Link to='/prices' className='btn btn-smart'>Lets Order</Link>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Shop