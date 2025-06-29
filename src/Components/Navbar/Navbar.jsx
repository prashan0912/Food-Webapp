import React from 'react'
import './Navbar.css'

import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import search from '../../assets/search.png'
import { useState } from 'react'
export default function Navbar() {
    const [signin , setSignin] = useState(false);
    return (
        <div>
            <div className="navbar">
                <img src={logo} className="logo"
                    style={{ height: 70, width: 70 }}
                    alt='photo' />
                <div className="nav-center">
                    <li id='listitem'>Home</li>
                    <li id='listitem'>Menu</li>
                    <li id='listitem'>Mobile-app</li>
                    <li id='listitem'>Contact us</li>
                </div>
                <div className="nav-right">
                    <img src={search} className="search-bar"
                        style={{ height: 30, width: 30 }}

                    />
                    <img src={cart} className="cart"
                        style={{ height: 30, width: 30 }}
                    />
                    <button onClick={()=>setSignin(!signin)} className={signin ? "signin":""} >sign in</button>
                </div>
            </div>

        </div>
    )
}
