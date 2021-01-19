import React, { useCallback, useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons';
import { Link } from 'react-router-dom';
import Title from '../common/Title';
import KakaoImage from '../../assets/images/kakao_login_medium_wide.png';
import { FACEBOOK_REDIRECT_URI, GOOGLE_REDIRECT_URI, GITHUB_AUTH_URL, EMAIL_REG, PWD_REG, HTTP_STATUS, NAVER_AUTH_URL } from '../common/Constants';
import axios from 'axios';
import LoadingBar from '../common/LoadingBar';
import client from '../../lib/api/client';
import jwt_decode from "jwt-decode";

const LoginPage = ({ history }) => {


  const [ loading, setLoading ] = useState(true);          // 로딩바
  const [ errorTxt, setErrorTxt] = useState('');          // 에러메세지
  const [ enabled, checkEnabled ] = useState({
    'checkEmail' : false,
    'checkPassword' : false,
  });


  const checkAutoLogin = async () => {

    // re-rendering limit
    if(loading) {
      if(window.location.href.split("&")[1] !== undefined) {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        if(code !== null && code !== undefined && code !== "") {
          await axios.post('oauth/naver/callback', {
            code: code,
            state : state
          }).then(function(res) {
            setLoading(false);
            // console.log('resData >>>', JSON.stringify(res));
            if(res.status === HTTP_STATUS.SUCCESS) {

              localStorage.setItem('access_token' , JSON.stringify(res.headers.access_token));
              localStorage.setItem('refresh_token' , JSON.stringify(res.headers.refresh_token));
              localStorage.setItem('userInfo' , JSON.stringify(res.data.response));

              history.push('/home');

            } else {
              setErrorTxt(res.data.errorTxt);
            }
          }).catch((error) => {
            setErrorTxt('Login error');
            setLoading(false);
          })
        } else {
          setErrorTxt('Code error');
          setLoading(false);
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
      e.target.parentElement.classList.add('mc_checkmark');
      enabled.checkEmail = true;
    } else {
      setErrorTxt('이메일 형식이 아닙니다.');
      e.target.parentElement.classList.remove('mc_checkmark');
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
  };

  },[enabled]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    await client
      .post('/user/login', {
        email: e.target.email.value,
        password: e.target.password.value,
      },{
        headers: {
          'Authorization': localStorage.getItem('access_token'),
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        // console.log('Login response >>>', JSON.stringify(res));
        setLoading(false);
        if(res.data.success && res.status === HTTP_STATUS.SUCCESS) {
          if (res.data.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;  // header에 accessToken 공통 추가
            // accessToken, user정보 저장
            localStorage.setItem('access_token', res.data.token);
            localStorage.setItem('userInfo' , JSON.stringify(jwt_decode(res.data.token)));

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
      {loading && <LoadingBar />}
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
        <p className="chk_validate">{errorTxt}</p>
        <Button disabled={!enabled.checkEmail || !enabled.checkPassword} type="submit" className="btn-lg btn-dark btn-block">
          Login
        </Button>
      </Form>
      <div className="social-wrap">
        <div className="text-center pt-3">-Or continue with your social account-</div>
        <FacebookLoginButton onClick={(e) => (window.location = FACEBOOK_REDIRECT_URI)} className="mt-3 mb-3" style={{ fontSize: '15px' }} align="center"></FacebookLoginButton>
        <GoogleLoginButton onClick={(e) => (window.location = GOOGLE_REDIRECT_URI)} className="mt-3 mb-3" style={{ fontSize: '15px' }} align="center" />
        <GithubLoginButton onClick={() => window.open(GITHUB_AUTH_URL)} className="mt-3 mb-3" style={{ fontSize: '15px' }} align="center" />
        <button className="btn-social btn-kakao" onClick={(e) => (window.location = KAKAO_REDIRECT_URI)}></button>
        <div onClick={(e) => (window.location = NAVER_AUTH_URL)}  className="btn_naver"></div>
        <div className="text-center">
          <Link to="/signUp">Sign up</Link>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
