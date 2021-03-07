import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "../../../axios";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import SearchResult from "../../results/SearchResult";
function Profile() {
  const [bookingResults, setBookingResults] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get("/bookings");
  //     setResults(request.data);
  //   }
  //   fetchData();
  // }, []);
  return (
    <div className="profile">
      <div className="profile_head">
        <img src="/images/img-7.jpg" className="profile__headImage" alt="" />
        <div className="profile_headData">
          <h2 className="f-shead">DummyUser</h2>
          <div className="profile__info f-text">
            <EmailIcon />
            <p>dummymail@gmail.com</p>
          </div>
          <div className="profile__info f-text">
            <PhoneIcon /> <p>9876543210</p>
          </div>
        </div>
      </div>
      <div className="profile__book">
        <div className="profile__bookings">
          <h1>BOOKINGS</h1>
          <div className="profile__results">
            {bookingResults.map((result) => (
              <SearchResult />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
