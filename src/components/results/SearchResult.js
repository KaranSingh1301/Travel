import React, { useContext } from "react";
import "./SearchResult.css";
import { TravelContext } from "../../context";
import { postBooking, getUser } from "../../action/general-action";
import { useHistory } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  img,
  hotelID,
  location,
  title,
  description,
  from,
  to,
  star,
  price,
}) {
  const { USER, TOKEN } = useContext(TravelContext);
  const [user, setUser] = USER;
  const [token] = TOKEN;
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
      });
    }
  };

  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <button className="searchResult__button f-con" onClick={handleBooking}>
        Book
      </button>

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>{hotelID}</p>
          <p>{description}</p>
          {from && <p>FROM: {from}</p>}
          {to && <p>TO: {to}</p>}
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <p>Rs {price}/Night</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
