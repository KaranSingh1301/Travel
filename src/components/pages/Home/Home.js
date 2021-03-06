import React from "react";
import "./Home.css";
import HeroSection from "./HeroSection";
import Cards from "../../Cards";
import Footer from "../../footer/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
