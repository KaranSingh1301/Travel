import React, { useContext } from "react";
import "./HeroSection.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { TravelContext } from "../../../context";

function HeroSection() {
  const { TOKEN } = useContext(TravelContext);
  const [token, setToken] = TOKEN;
  return (
    <div className="hero-container">
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-button">
        <Link to={token ? "/dashBoard" : "/sign-up"}>
          <button className="hero-button__1">EXPLORE</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
