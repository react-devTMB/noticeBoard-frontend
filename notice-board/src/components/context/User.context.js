import { createContext } from "react";

const UserContext = createContext({
  userInfo : {},
  updateUserInfo: () => {},
  number: 0,
  increase: () => {},
  decrease: () => {}
});

export default UserContext;