import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import './footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='/img/foodlogo.jpeg' width={100} height={100}alt='logo'></img>
                    </div>
                <div className='detail'>
                    <p>Proffesional chefs taking time to satisfy your palletes</p>
                    <div className='icon'>
                    <li><FaFacebookSquare/></li>
                    <li><FaInstagramSquare/></li>
                    <li><FaTwitterSquare/></li>
                    <li><FaYoutube/></li>
                    </div>
                </div>
            </div>
        <div className='account'>
            <h3>My Account</h3>
            <ul>
                <li>Account</li>
                <li>Order</li>
                <li>Cart</li>
                <li>shipping</li>
                <li>return</li>
            </ul>
        </div>
        <div className='Pages'>
            <h3>Pages</h3>
            <ul> 
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Terms and Conditions</li>
            </ul>
        </div>
     </div>    
</div>
    </>
  )
}

export default Footer