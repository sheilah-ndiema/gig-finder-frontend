import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import "./category.css"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Register from "./components/Register"
import Newlisting from "./components/Newlisting";
import Category from "./components/Category"
import "./App.css"


function App() {
      const [categories, setCategories] = useState([]);
      const [jobListings, setJobListings] = useState([]);

        useEffect(() => {
          fetch("http://localhost:9292/categories")
          .then((r) => r.json())
          .then((data) => {
            setCategories(data);
          })
        }, []);

          useEffect(() => {
            fetch("http://localhost:9292/job_listings")
            .then((r) => r.json())
            .then((jobListings) => {
              setJobListings(jobListings);   
            });
          }, []);

  return (
        <div>
          <NavBar />
          <Routes>
            <Route exact path = '/home' element={<Home />}/>
            <Route exact path='/about' element={<About />}/>
            <Route exact path='/category' element={<Category />}/>
            <Route exact path='/listing' element={<Newlisting 
            categories={categories} 
            jobListings={jobListings} 
            setJobListings={setJobListings}/>
            }/>
            <Route exact path='/register' element={<Register/>}/>
          </Routes>
          <Footer />
        </div>
  );
}

export default App;