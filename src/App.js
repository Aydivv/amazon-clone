import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/checkout" element={[<Header />,<Checkout />]} />
          <Route path="*" element={[<Header />,<Home />]} />
          <Route path="/login" element={[<Login />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
