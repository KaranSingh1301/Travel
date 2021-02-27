import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Services from "./components/pages/Services/Services";
import Products from "./components/pages/Products/Products";
import SignUp from "./components/pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
