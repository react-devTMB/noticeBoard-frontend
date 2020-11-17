
import React, { useContext } from 'react';
import UserContext from '../context/User.context';

const HomePage = (value) => {

    const { settingUserInfo } = useContext(UserContext);
    settingUserInfo(localStorage.getItem('userInfo'));

    const checkLogin = (type) => {
    };

    return(
        <div>
            <span>HomePage</span>
            <br />
            <div onClick={ checkLogin('gokomong') }>gokomong niticeBoard</div>
            <br />
            <div onClick={ checkLogin('jglee') }>jglee niticeBoard</div>
            <br />
            <div onClick={ checkLogin('jekim') }>jekim niticeBoard</div>
            <br />
            {/* <AlertDialog/> */}
        </div>
    )
}

export default HomePage;