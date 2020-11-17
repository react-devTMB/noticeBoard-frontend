import React, { useState } from "react";
import UserContext from "../context/User.context";

const UserProvider = ({ children }) => {

  const [userInfo, setUserInfo] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const settingUserInfo = (prev) => {
    if(localStorage.getItem('userInfo') === null) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
    setUserInfo(localStorage.getItem('userInfo'));
  }

  return (
    <UserContext.Provider value={ { userInfo , settingUserInfo, isAuthenticated } }> 
      { children } 
    </UserContext.Provider>
  );


};

export default UserProvider;