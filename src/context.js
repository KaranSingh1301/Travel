import React, { createContext, useState } from "react";
import { getBookings } from "./action/general-action";
export const TravelContext = createContext();

export const TravelProvider = (props) => {
  //fetch auth from session
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [user, setUser] = useState([]);
  const [token, setToken] = useState(getToken);
  const [bookingResults, setBookingResults] = useState([]);

  async function fetchBookings() {
    getBookings(user.id).then((res) => {
      if (res) {
        console.log(res);
        setBookingResults(res);
      } else {
        console.log("this is getBookings error from profile");
      }
    });
  }

  return (
    <TravelContext.Provider
      value={{
        USER: [user, setUser],
        TOKEN: [token, setToken],
        BOOKINGS: [bookingResults, setBookingResults],
        FETCH_BOOKINGS: fetchBookings,
        Auth: getToken,
      }}
    >
      {props.children}
    </TravelContext.Provider>
  );
};
