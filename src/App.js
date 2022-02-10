import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS : ', authUser);

      if (authUser){
        // user logged in/ the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    //anytime anything in the array below changes the above code will re run.
  }, [])

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
