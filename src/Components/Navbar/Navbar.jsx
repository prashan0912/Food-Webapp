import React, { useContext } from 'react'
import './Navbar.css'
import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import search from '../../assets/search.png'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
export default function Navbar({ setShowLogin }) {

    const [isFixed, setIsFixed] = useState(false);
    const { cartItems } = useContext(StoreContext)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div>
            <div className={`navbar${isFixed ? ' fixed' : ''}`}>
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

                    <img src={search} className="search-bar" />

                    <Link to="/cart" ><p className='dot'>{Object.keys(cartItems).length}</p><img src={cart} className="cart" />

                    </Link>
                    <button
                        // onClick={() => setSignin(!signin)}
                        onClick={() => setShowLogin(true)}
                        // className={signin ? "signin" : ""}
                        className="signin" >sign in</button>
                </div>
            </div>

        </div>
    )
}
