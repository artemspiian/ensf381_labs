import React from 'react';
import Home from "./Home.js";
import About from  "./About.js";
import Contact from "./Contact.js";

let currentYear = (new Date()).getFullYear()
let isLoggedIn = true




function App() {
  return (
    <div>
      <h1>ENSF - 381: Full Stack Web Development</h1>
      <p>React Componenets</p>
      <p>{currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
