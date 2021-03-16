import React, { useEffect, useState, useContext, Fragment } from "react";
import "./Profile.css";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import SearchResult from "../../results/SearchResult";
import { getUser } from "../../../action/general-action";
import { TravelContext } from "../../../context";
function Profile() {
  //context
  const { USER, TOKEN, BOOKINGS, FETCH_BOOKINGS } = useContext(TravelContext);
  const [token] = TOKEN;
  const [user, setUser] = USER;
  const [bookingResults] = BOOKINGS;

  useEffect(() => {
    async function fetchData() {
      getUser(token).then((res) => {
        if (res) {
          setUser(res[0]);
        } else {
          console.log("this is getuser error from profile");
        }
      });
    }
    fetchData();
    FETCH_BOOKINGS();
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
      <div className="profile__body">
        <div className="profile__bookings">
          <h1>BOOKINGS</h1>
          <div className="profile__results">
            {bookingResults.length > 0 && (
              <Fragment>
                {bookingResults.map((result) => (
                  <SearchResult
                    key={result.booking_id}
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                    hotelID={result.hotel_id}
                    location={result.arrival_location}
                    booking_id={result.booking_id}
                    title={result.hotel_name}
                    description={result.ameneties}
                    from={result.arrival_date}
                    to={result.departure_date}
                    star={result.rating}
                    price={result.price}
                    // fetchBookings={fetchBookings}
                  />
                ))}
              </Fragment>
            )}
            {!bookingResults.length > 0 && (
              <Fragment>
                <h2>
                  You have no Bookings, checkout the available hotels to make a
                  booking
                </h2>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
