import React, { useState } from "react";
import UserContext from "../context/User.context";

const UserProvider = ({ children }) => {

//   const increase = () => {
//     setNumber(prevState => {
//       return {
//         ...prevState,
//         number: prevState.number + 1
//       };
//     });
//   };

//   const decrease = () => {
//     setNumber(prevState => {
//       return {
//         ...prevState,
//         number: prevState.number - 1
//       };
//     });
//   };

  const updateUserInfo = () => {
      setUserInfo(prevState => {
        console.log('prevState ?? ' , prevState);
        return {
          ...prevState,
          userInfo: prevState.number - 1
        };
    });
  }

    //state초기화 객체 입니다.
    const initialState = {
        userInfo: {},
        updateUserInfo,
        // number: 0,
        // increase,
        // decrease
    };

    // const [number, setNumber] = useState(initialState);
    const [userInfo, setUserInfo] = useState(initialState);

    return (
        <UserContext.Provider value={userInfo}> {children} </UserContext.Provider>
    );
};

export default UserProvider;