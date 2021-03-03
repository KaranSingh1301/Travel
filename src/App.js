import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Services from "./components/pages/Services/Services";
import SignUp from "./components/pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import { ToastProvider } from "react-toast-notifications";
import Profile from "./components/pages/Profile/Profile";
import Dashboard from "./components/pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <ToastProvider>
          <Route path="/sign-up" component={SignUp} />
          

          <Route path="/login" component={Login} />
          </ToastProvider>
          
         
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
