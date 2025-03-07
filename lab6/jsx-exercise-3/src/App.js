import React from 'react';
import Home from "./Home.js";
import About from  "./About.js";
import Contact from "./Contact.js";
import EngineeringTopics from './EngineeringTopics.js';

let currentYear = (new Date()).getFullYear()
let isLoggedIn = true




function App() {
  return (
    <div>
      <h1>ENSF - 381: Full Stack Web Development</h1>
      <p>React Componenets</p>
      <p>{currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
      <Home title="Home Page" description="Welcome to our website"/>
      <About title="About Us" description="We are passionate about delivering quality experiences."/>
      <Contact title="Contact Us" description="Feel free to reach out to us via email or phone."/>
      <EngineeringTopics />
    </div>
  );
}

export default App;
