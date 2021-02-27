import React from "react";
import "./Services.css";

function Services() {
  const services = {
    backgroundImage:
      " url('https://scx2.b-cdn.net/gfx/news/hires/2018/2-ocean.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    color: "#fff",
    fontSize: "100px",
    height: "700px",
  };
  return <h1 style={services}>SERVICES</h1>;
}

export default Services;
