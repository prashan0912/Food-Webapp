import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { logos } from '../../assets/logo/logos'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left-part">
                    <div className="footer-logo"><img src={logo} alt="" /></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum sed assumenda possimus, quidem nesciunt amet ad magnam suscipit cum tempore, labore ipsam impedit culpa tempora nobis fuga aliquam commodi.
                        Unde asperiores dolorum at veritatis impedit tempora. Sapiente ea quae ex magnam? Nostrum cupiditate odit magnam similique dolorum! Dolorum aut dicta, natus dolore inventore voluptatum eos sapiente voluptates at atque.
                    </p>
                    <div className="social-icon">
                        <img src={logos.fb} alt="" />
                        <img src={logos.yt} alt="" />
                        <img src={logos.telegram} alt="" />
                        <img src={logos.linkedin} alt="" />
                        <img src={logos.insta} alt="" />
                    </div>
                </div>
                <div className="middle-part">
                    <h1>Company</h1>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </div>
                <div className="right-part">
                    <h1>Get in Touch</h1>
                    <p>Contact:1231191234</p>
                    <p>Email: fooody@gmail.com</p>
                    <p> Address : Main branch atal nagar Durg</p>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum deserunt architecto, cum blanditiis illo omnis aliquid sint saepe necessitatibus, incidunt, ut tempore natus nulla nihil quo deleniti sit facilis rerum?
                </p>
            </div>
        </div>
    )
}
export default Footer