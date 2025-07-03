import React from 'react'
import './Header.css'
export const Header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <h2>Order your favourite food here </h2>
        <h4>Welcome to Food WebApp, where every dish is crafted with passion and flavor. Join us for a memorable dining experience filled with warmth, taste, and tradition.</h4>
        <button className='menu-button'> View Menu</button>
      </div>
    </div>
  )
}
export default Header
