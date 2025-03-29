import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
//import HousePricePredictor from "./HousePricePredictor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        /*<Route path="/predict" element={<HousePricePredictor />} />*/
      </Routes>
    </Router>
  );
}

export default App;
