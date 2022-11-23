import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){
  return (
    <div>
    <div className='footer'>
    <h1 className='h'>Gig-Finder</h1>
    <div>
    <h2 className='i'>Get Started</h2>
    <p>Home</p>
    <p>Register</p>
    <p>Job Listings</p>
    </div>
    <div>
      <h3>About Us</h3>
      <p>Company Information</p>
      <p>Contact Us</p>
      <p>Reviews</p>
    </div>
    <div>
      <h3>Support</h3>
      <p>FAQ</p>
      <p>Help Desk</p>
      <p>Forums</p>
    </div>
  </div>
  <p className='copy'>@All rights deserved,terms and condition applied.</p>
  </div>
      
  )
}

export default Footer