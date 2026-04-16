import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <img src={assets.logo} alt=""></img> */}
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur ex quas voluptate facere, sequi accusamus qui ut dolore, repudiandae, aperiam amet vero quos perferendis porro reiciendis! Vitae aperiam at porro.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9876543210</li>
                    <li>contact@orderonthego.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2025 &copy; OrderOnTheGo.com - All Right Reserved </p>
    </div>
  )
}

export default Footer
