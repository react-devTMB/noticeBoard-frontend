
import React from 'react';
// import { userInfo } from '../context/User.context';
// import AlertDialog from '../common/Popup';

const HomePage = (value) => {

    const checkLogin = (type) => {
         // loading show
        // 자동로그인 여부 체크
        // 로그인이 되어있다면??
            // 
        // 로그인이 안되어있다면?
            // 


        // type에 따른 게시판 이동
    };
    // console.log('HomePage value >> ' , value);
    // // const [ loading, setLoading ] = useState(false);        // 로딩바
    // const userInfo = useContext(UserContext);
    // console.log(userInfo);
   

    return(
        <div>HomePage
            <div onClick={ checkLogin('gokomong') }>gokomong niticeBoard</div>
            <div onClick={ checkLogin('jglee') }>jglee niticeBoard</div>
            <div onClick={ checkLogin('jekim') }>jekim niticeBoard</div>
            {/* <AlertDialog/> */}
        </div>
    )
}

export default HomePage;