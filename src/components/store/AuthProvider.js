import { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
    if (userIsLoggedIn) {
    }
  };
  const logoutHandler = () => {
    setToken(null);
  };

  const authcontext = {
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    tokenid: token,
  };
  return (
    <AuthContext.Provider value={authcontext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
