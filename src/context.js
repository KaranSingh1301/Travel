import React, { createContext, useState } from "react";
export const TravelContext = createContext();

export const TravelProvider = (props) => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };
  const [user, setUser] = useState();
  const [token, setToken] = useState(getToken);

  return (
    <TravelContext.Provider
      value={{
        USER: [user, setUser],
        TOKEN: [token, setToken],
        Auth: getToken,
      }}
    >
      {props.children}
    </TravelContext.Provider>
  );
};
