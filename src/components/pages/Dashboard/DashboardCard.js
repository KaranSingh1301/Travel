import React from "react";
import "./DashboardCard.css";

function DashboardCard({ src, title, description, price }) {
  return (
    <div className="dashboardCard">
      <img src={src} alt="" />
      <div className="dashboardCard__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default DashboardCard;
