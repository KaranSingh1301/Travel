import React, { Fragment, useContext } from "react";
import "./SearchResult.css";
import { TravelContext } from "../../context";
import {
  postBooking,
  getUser,
  deleteBooking,
} from "../../action/general-action";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  img,
  hotelID,
  location,
  booking_id,
  title,
  description,
  from,
  to,
  star,
  price,
}) {
  const { USER, TOKEN, FETCH_BOOKINGS } = useContext(TravelContext);
  const [user, setUser] = USER;
  const [token] = TOKEN;
  const { addToast } = useToasts();

  let history = useHistory();
  async function fetchData() {
    getUser(token).then((res) => {
      if (res) {
        setUser(res[0]);
      } else {
        console.log("this is getuser error from results");
      }
    });
  }

  const handleBooking = () => {
    if (!token) {
      history.push("./login");
    }
    if (token) {
      fetchData();
      postBooking({
        hotel_id: hotelID,
        user_id: user.user_id,
        arrival_location: location,
        departure_location: location,
        arival_date: from,
        departure_date: to,
      })
        .then(() => {
          // console.log("sucesss booking");
          addToast("Your Booking is made", {
            appearance: "success",
          });
        })
        .catch((err) => {
          addToast("Something went wrong while booking. Try again", {
            appearance: "error",
          });
          console.log(err);
        });
    }
  };
  const handleDelete = () => {
    if (!token) {
      history.push("./login");
    }
    if (token) {
      deleteBooking(booking_id)
        .then(() => {
          // console.log("removal of booking");
          addToast("Your Booking is canceled", {
            appearance: "success",
          });
        })
        .catch((err) => {
          addToast("Something went wrong while removing booking. Try again", {
            appearance: "error",
          });
          console.log(err);
        });
      FETCH_BOOKINGS();
    }
  };

  return (
    <div className="searchResult">
      <img src={img} alt="" />
      {booking_id && (
        <button className="searchResult__button f-con" onClick={handleDelete}>
          Delete
        </button>
      )}
      {!booking_id && (
        <button className="searchResult__button f-con" onClick={handleBooking}>
          Book
        </button>
      )}

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          {location && <p>{location}</p>}
          {title && <h3>{title}</h3>}
          <p>{"____"}</p>
          {description && <p>{description}</p>}
          {from && <p>FROM: {from}</p>}
          {to && <p>TO: {to}</p>}
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            {star && (
              <Fragment>
                {" "}
                <StarIcon className="searchResult__star" />
                <p>
                  {" "}
                  <strong>{star}</strong>
                </p>
              </Fragment>
            )}
          </div>
          <div className="searchResults__price">
            {price && <p>Rs {price}/Night</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
