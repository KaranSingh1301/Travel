import React from "react";
import "./SearchResult.css";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  img,
  location,
  title,
  description,
  from,
  to,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <button className="searchResult__button f-con">Book</button>

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
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
            <h2>Rs {price}/night</h2>
            <p>Rs {total}/total</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
