
import React, { useContext, useEffect } from 'react';
import UserContext from '../context/User.context';

const HomePage = (value) => {

    const { settingUserInfo } = useContext(UserContext);
    const accessToken  = localStorage.getItem('access_token') !== null ?  localStorage.getItem('access_token') : null;

    useEffect(() => {
      if(accessToken !== null && accessToken !== undefined) {
      const userInfo  = localStorage.getItem('userInfo') !== null ?  localStorage.getItem('userInfo') : null;
    //   console.log('userInfo >> ' , userInfo);
      if(userInfo !== null && userInfo !== undefined) {
        settingUserInfo(userInfo);
      }
    }
      return () => {}
    }, [accessToken, settingUserInfo])
    return(
        <div>
           <div className="title_wrapper"><span className="mc_title_basic01">HomePage</span></div>
        </div>
    )
}

export default HomePage;