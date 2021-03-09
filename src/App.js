import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Services from "./components/pages/Services/Services";
import SignUp from "./components/pages/SignUp/SignUp";
import Login from "./components/pages/Login/Login";
import Profile from "./components/pages/Profile/Profile";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TravelProvider } from "./context";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <TravelProvider>
      <Router>
        <Navbar />
        <Switch>
        <ToastProvider  autoDismiss placement="top-right">
          <Route path="/services" component={Services} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" component={SignUp} />
            <Route path="/login" component={Login} />
          </ToastProvider>
        </Switch>
      </Router>
    </TravelProvider>
  );
}

export default App;
