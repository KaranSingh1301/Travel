import React, { useEffect, useState, useContext } from "react";
import "./Profile.css";
// import axios from "../../../axios";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import SearchResult from "../../results/SearchResult";
import { getUser } from "../../../action/general-action";
import { TravelContext } from "../../../context";
function Profile() {
  const [bookingResults, setBookingResults] = useState([]);
  //context
  const { TOKEN } = useContext(TravelContext);
  const [token, setToken] = TOKEN;
  //USER
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      getUser(token).then((res) => {
        if (res) {
          // console.log(res[0].email);
          setUser(res[0]);
        } else {
          console.log("this is getuser error grom profile");
        }
      });
    }
    fetchData();
  }, []);

  return (
    <div className="profile">
      <div className="profile_head">
        <img src="/images/img-7.jpg" className="profile__headImage" alt="" />
        <div className="profile_headData">
          <h2 className="f-shead">{user.name}</h2>
          <div className="profile__info f-text">
            <EmailIcon />
            <p>{user.email}</p>
          </div>
          <div className="profile__info f-text">
            <PhoneIcon /> <p>{user.phone}</p>
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
