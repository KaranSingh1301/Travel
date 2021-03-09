import React from "react";
import CardItem from "../../CardItems";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <div className="services__heading f-head">
        Our Services to ensure your welfare
      </div>
      <div className="services__container">
        <div className="services__wrapper">
          <ul className="services__items">
            <CardItem
              src="images/hotel.jpg"
              text="Explore some of the best options of a stay"
              label="Hotels"
              path="/dashboard"
            />
            <CardItem
              src="images/meal.jpg"
              text="Food that is die for"
              label="Meals"
              path="/dashboard"
            />
          </ul>
          <ul className="services__items">
            <CardItem
              src="images/flight.jpg"
              text="FLy to your Dream Destination in style"
              label="Flights"
              path="/dashboard"
            />
            <CardItem
              src="images/train.jpg"
              text="Experience the area with a tour in train"
              label="Trains"
              path="/dashboard"
            />
            <CardItem
              src="images/bus.jpg"
              text="Unlock the joy with the best buses to for travel"
              label="Bus"
              path="/dashboard"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
