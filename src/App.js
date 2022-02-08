import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="*" element={[<Header />,<Home />]} />
          <Route path="checkout" element={[<Header />,<h1>CHECKOUT</h1>]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
