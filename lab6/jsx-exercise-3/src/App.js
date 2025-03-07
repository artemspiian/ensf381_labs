import "./App.css";
import Home from "./Home";
import About from "./About.js";
import Contact from "./Contact.js";
import EnginneringTopics from "./EngineeringTopics.js";

function App() {
  const header = <h1>ENSF-381: Full Stack Web Development</h1>;
  const reactComponents = <p>React Components</p>;
  const currentYear = <p> {new Date().getFullYear()} </p>;
  const isLoggedIn = true;
  const isLoggedInString = (
    <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
  );

  return (
    <div>
      {header}
      {reactComponents}
      {currentYear}
      {isLoggedInString}
      <Home title="Home Page" description="Welcome to our website."/>
      <About title="About Us" description="We are passionate about delivering quality experiences."/>
      <Contact title="Contact Us" description="Feel free to reach out to us via email or phone."/>
      <EnginneringTopics />
    </div>
  );
}

export default App;
