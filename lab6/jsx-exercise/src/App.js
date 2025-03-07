import logo from './logo.svg';
import './App.css';

let currentYear = (new Date()).getFullYear()


function App() {
  return (
    <div>
      <h1>ENSF - 381: Full Stack Web Development</h1>
      <p>React Componenets</p>
      <p>{currentYear}</p>
    </div>
  );
}

export default App;
