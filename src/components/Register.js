import React from 'react'
import { useState} from "react";

function Register() {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("http://localhost:9292/users", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            location: location,
            email: email,
            
          }),
        });
        
        if (res.status === 200) {
          setName("");
          setLocation("");
          setEmail("");
          setMessage("User created successfully");
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <div id="register">
        <div className="Register" style={{textAlign:"center", color:"#5A738E", fontWeight:"bold"}}>
                <h2>New User</h2>
                <span>Welcome to Gig-Finder!</span>

                <div id="Column" align='center'>
                <form id='register-form' onSubmit={handleSubmit} > 
                    <input 
                        type="text" 
                        value={name}
                        placeholder="Username"
                        onChange={(e) => setName(e.target.value)}
                        />

                      <input 
                        type="text" 
                        value={location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                        /> 

                    <input 
                      type="text"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      />

                    <button className="btn">Sign Up</button>

                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>
            </div>
        </div>
        {/* </div> */}
    </div>
    
  )
}

export default Register
