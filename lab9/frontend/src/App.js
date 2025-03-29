import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/Login.js"
import HousePricePredictor from "./components/HousePricePredictor.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/predict" element={<HousePricePredictor />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
