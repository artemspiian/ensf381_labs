import logo from './logo.svg';
import './App.css';

let currentYear = (new Date()).getFullYear()
let isLoggedIn = true

function App() {
  return (
    <div>
      <h1>ENSF - 381: Full Stack Web Development</h1>
      <p>React Componenets</p>
      <p>{currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
    </div>
  );
}

export default App;
