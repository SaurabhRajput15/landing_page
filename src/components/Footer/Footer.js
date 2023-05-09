import React from 'react'
import './Footer.css'

function Footer() {

  return (
    <footer>
      <div className='row'>
        <div className='col'>
          <h1 className='h1'>ITE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='col'>
          <h3>Office <div className='underline'><span></span></div></h3>
          <p>ITPL</p>
          <p>Whitefield, Bangalore</p>
          <p>karnataka, PIN 560066, india</p>
          <p className='email-id'>someone@gmail.com</p>
          <h4>+91 - 0123456789</h4>
        </div>
        <div className='col'>
          <h3>Links <div className='underline'><span></span></div></h3>
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>Services</a></li>
            <li><a href=''>About Us</a></li>
            <li><a href=''>Features</a></li>
            <li><a href=''>Contacts</a></li>
          </ul>
        </div>
        <div className='col'>
          <h3>Newsletter <div className='underline'><span></span></div></h3>
          <form>
            <i className='far fa-envelope'></i>
            <input type='email' placeholder='Enter your email id' required />
            <button type='submit'><i className="fa-solid fa-arrow-right"></i></button>
          </form>
          <div className='social-icons'>
             <i className='fab fa-facebook-f'></i>
             <i className='fab fa-twitter'></i>
             <i className='fab fa-whatsapp'></i>
             <i className='fab fa-pinterest'></i>
          </div>
        </div>
      </div>
      <hr/>
      <p className='copyright'>ITE © 2023 - All Rights Reserved</p>
    </footer>
  )
}

export default Footer