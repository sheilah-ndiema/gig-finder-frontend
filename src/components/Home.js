import React from 'react'
import { NavLink } from "react-router-dom";


import Alex from "../assets/Alex.png"

function Home() {
  return (
    <div id='home' className='home'>
      <div className="container">
        <div className="tagline">
          <div id="heading">
            <h1 style={{fontWeight:"bolder"}}>GIG-FINDER</h1>
          </div>
          <p>Whether you are looking for a new job
            or just trying to make some extra money,
            our platform will connect you with
            opportunities that suit your style and location.</p>
          <button id="button">
            <NavLink id="btn-register" to='/register'>REGISTER</NavLink>
          </button>
        </div>

        <div id="image">
          <img src={Alex} alt="hero-section" />
        </div>

      </div>

    </div>
  )
}

export default Home;