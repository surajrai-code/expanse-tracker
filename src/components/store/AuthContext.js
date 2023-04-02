import React, { createContext, useContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  tokenid: "",
});
export default AuthContext;
