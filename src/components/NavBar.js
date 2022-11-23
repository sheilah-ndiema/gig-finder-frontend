import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";


export default function NavBar () {
    return (
        <header>
        <div className="navbar" >
            <div class="logo">
                <img src={logo} alt="logo" height="100px" />
            </div>
            <div className="navlinks">
                {/* <a href="/home">Home</a> */}
                <NavLink to="/home" style={{fontWeight: "bold"}}>Home</NavLink>
                {/* <a href="/about">About us</a> */}
                <NavLink to='/about' style={{fontWeight: "bold"}}>About</NavLink>
                {/* <a href="/category">Category</a> */}
                <NavLink to='/category' style={{fontWeight: "bold"}}>Category</NavLink>
                {/* <a href="/listing" id="listing">New-Listing</a> */}
                <NavLink to='/listing' id="listing" style={{fontWeight: "bold"}}>New Listing</NavLink>
                {/* <NavLink to='/register'>Register</NavLink> */}
                </div>
            </div>
        </header>
    )
}