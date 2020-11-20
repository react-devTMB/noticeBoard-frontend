import React, { useCallback, useState, useContext } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';
import { Link } from 'react-router-dom';
import Title from '../common/Title';
import KakaoImage from '../../assets/images/kakao_login_medium_wide.png';
import { FACEBOOK_REDIRECT_URI, GITHUB_AUTH_URL, EMAIL_REG, PWD_REG, HTTP_STATUS, NAVER_REDIRET_URI } from '../common/Constants';
import axios from 'axios';
import LoadingBar from '../common/LoadingBar';
import client from '../../lib/api/client';
import jwt_decode from "jwt-decode";
import UserContext from '../context/User.context';

const LoginPage = ({ history }) => {


  const [ loading, setLoading ] = useState(true);          // 로딩바
  const [ errorTxt, setErrorTxt] = useState('');          // 에러메세지
  const [ enabled, checkEnabled ] = useState({
    'checkEmail' : false,
    'checkPassword' : false,
  });

  const { settingUserInfo } = useContext(UserContext);

  const checkAutoLogin = async () => {

    // re-rendering limit
    if(loading) {
      if(window.location.href.split("&")[1] !== undefined) {
        const auth_code = window.location.href.split("?code=")[1].split("&state")[0];
        if(auth_code !== null && auth_code !== undefined && auth_code !== "") {
          await axios
          .get('/oauth/naver')
          .then((res) => {
            console.log('naver oauth res >> ' , JSON.stringify(res));
          })
          .catch((error) => {
            console.log('naver oauth error >> ', error.response);
            setLoading(false);
          })
        } else {

        }

      } else {
        setLoading(false);
      }
    }
  }

  checkAutoLogin();

  const onChangeEmail = (e) => {
    const { value } = e.target;

    if (EMAIL_REG.test(value)) {
      setErrorTxt('');
      e.target.parentElement.classList.add("mc_checkmark");
      enabled.checkEmail = true;
    } else {
      setErrorTxt('이메일 형식이 아닙니다.');
      e.target.parentElement.classList.remove("mc_checkmark");
      enabled.checkEmail = false;
    };

    checkEnabled({ ...enabled });
  };

  const onChangePassword = useCallback(e => {
    e.preventDefault();

    const { value } = e.target;

    if (value.length >= 8 && value.length <= 16 && PWD_REG.test(value)) {
      enabled.checkPassword = true;
      setErrorTxt('');
      e.target.parentElement.classList.add("mc_checkmark");
    } else {
      setErrorTxt('비밀번호는 8자이상 16자 이하, 영문, 숫자, 특수문자 조합이어야 합니다.');
      e.target.parentElement.classList.remove("mc_checkmark");
      enabled.checkPassword = false;
    }

    checkEnabled({ ...enabled });

    },[enabled]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    console.log(e);
    setLoading(true);

    await client
      .post('/user/login', {
        email: e.target.email.value,
        password: e.target.password.value,
      },{
        headers: {
          'authorization': localStorage.getItem('access_token'),
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        console.log('response', res);
        setLoading(false);
        if(res.data.success && res.status === HTTP_STATUS.SUCCESS) {
          if (res.data.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;  // header에 accessToken 공통 추가
            // accessToken, user정보 저장
            localStorage.setItem('access_token', res.data.token);
            localStorage.setItem('userInfo' , JSON.stringify(jwt_decode(res.data.token)));
            // console.log('userInfo >> ' ,JSON.stringify(jwt_decode(res.data.token)));
            settingUserInfo(JSON.stringify(jwt_decode(res.data.token)));

            history.push('/home');
          } else {
            setErrorTxt('token error!!');
          }
        } else {
          setErrorTxt(res.data.errorTxt);
        }
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
      });
  };

  return (
    <div className="login_wrap">
      { loading && <LoadingBar/>}
      <Form className="login-form" onSubmit={handleOnSubmit}>
        <Title text="welcome to TMB~!!"></Title>
        <FormGroup>
          <Input 
            type="text" 
            name="email" 
            placeholder="Email" 
            className="mc_checkmark"
            onChange={ onChangeEmail }
          />
        </FormGroup>
        <FormGroup>
          <Input 
            type="password" 
            name="password" 
            placeholder="Password"
            onChange={ onChangePassword }
          />
        </FormGroup>
        <p className="chk_validate">{ errorTxt }</p>
        <Button disabled={ !enabled.checkEmail || !enabled.checkPassword } type="submit" className="btn-lg btn-dark btn-block">
          Login
        </Button>
      </Form>
      <div className="social-wrap">
        <div className="text-center pt-3">-Or continue with your social account-</div>
        <FacebookLoginButton onClick={(e) => (window.location = FACEBOOK_REDIRECT_URI)} className="mt-3 mb-3" style={{ fontSize: '15px' }} align="center"></FacebookLoginButton>
        <GoogleLoginButton className="mt-3 mb-3" style={{ fontSize: '15px' }} align="center" />
        <GithubLoginButton onClick={() => window.open(GITHUB_AUTH_URL)} className="mt-3 mb-3" style={{ fontSize: '15px' }} align="center" />
        <KakaoBtn />
        <div onClick={(e) => (window.location = NAVER_REDIRET_URI)}  className="btn_naver"></div>
        {/* <a href={NAVER_AUTH_URL}>
          <div className="btn_naver"></div>
        </a> */}
        <div className="text-center">
          <Link to="/signUp">Sign up</Link>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
        </div>
      </div>
    </div>
  );
};

const KakaoBtn = styled(KakaoLogin)`
  display: block;
  border: 0px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
  color: #fff;
  cursor: pointer;
  margin: 1rem 5px;
  width: calc(100% - 10px);
  height: 50px;
  padding: 0px 10px;
  user-select: none;
  background: #f7e600 url(${KakaoImage}) no-repeat left center;
  background-size: auto 45px;
  text-indent: -10000px;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default LoginPage;
