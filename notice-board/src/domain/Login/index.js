import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
import jwt_decode from 'jwt-decode';
import client from '../../lib/api/client';
import LoadingBar from '../../components/common/LoadingBar';
import Title from '../../components/common/Title';
import LoginButton from '../../components/button/Login';
import FacebookLoginButton from '../../components/button/FacebookLogin';
import GoogleLoginButton from '../../components/button/GoogleLogin';
import GithubLoginButton from '../../components/button/GithubLogin';
import KakaoLoginButton from '../../components/button/KakaoLogin';
import NaverLoginButton from '../../components/button/NaverLogin';
import { EMAIL_REG, HTTP_STATUS, PWD_REG } from '../../components/common/Constants';

const Login = ({ history }) => {
  const [loading, setLoading] = useState(true); // 로딩바
  const [errorTxt, setErrorTxt] = useState(''); // 에러메세지
  const [enabled, checkEnabled] = useState({
    checkEmail: false,
    checkPassword: false,
  });

  const checkAutoLogin = async () => {
    // re-rendering limit
    if (loading) {
      if (window.location.href.split('&')[1] !== undefined) {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        if (code !== null && code !== undefined && code !== '') {
          await axios
            .post('oauth/naver/callback', {
              code: code,
              state: state,
            })
            .then(function (res) {
              setLoading(false);

              // console.log('resData >>>', JSON.stringify(res));
              if (res.status === HTTP_STATUS.SUCCESS) {
                localStorage.setItem('access_token', JSON.stringify(res.headers.access_token));
                localStorage.setItem('refresh_token', JSON.stringify(res.headers.refresh_token));
                localStorage.setItem('userInfo', JSON.stringify(res.data.response));

                history.push('/home');
              } else {
                setErrorTxt(res.data.errorTxt);
              }
            })
            .catch((error) => {
              setErrorTxt('Login error');
              setLoading(false);
            });
        } else {
          setErrorTxt('Code error');
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
  };

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
    }

    checkEnabled({ ...enabled });
  };

  const onChangePassword = useCallback(
    (e) => {
      e.preventDefault();

      const { value } = e.target;

      if (value.length >= 8 && value.length <= 16 && PWD_REG.test(value)) {
        enabled.checkPassword = true;
        setErrorTxt('');
        e.target.parentElement.classList.add('mc_checkmark');
      } else {
        setErrorTxt('비밀번호는 8자이상 16자 이하, 영문, 숫자, 특수문자 조합이어야 합니다.');
        e.target.parentElement.classList.remove('mc_checkmark');
        enabled.checkPassword = false;
      }

      checkEnabled({ ...enabled });
    },
    [enabled]
  );

  const doLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    await client
      .post(
        '/user/login',
        {
          email: e.target.email.value,
          password: e.target.password.value,
        },
        {
          headers: {
            'Authorization': localStorage.getItem('access_token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setLoading(false);

        if (res.status === HTTP_STATUS.SUCCESS) {
          if (res.data.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`; // header에 accessToken 공통 추가
            localStorage.setItem('access_token', res.data.token);
            localStorage.setItem('userInfo', JSON.stringify(jwt_decode(res.data.token)));

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
      <Form className="login-form" onSubmit={doLogin}>
        <Title title="welcome to TMB~!!"></Title>
        <FormGroup>
          <Input className="mc_checkmark" type="email" name="email" placeholder="Email" onChange={onChangeEmail} />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" placeholder="Password" onChange={onChangePassword} />
        </FormGroup>
        <p className="chk_validate">{errorTxt}</p>
        <LoginButton disabled={!enabled.checkEmail || !enabled.checkPassword} />
      </Form>
      <div className="social-wrap">
        <div className="text-center pt-3">-Or continue with your social account-</div>
        <FacebookLoginButton />
        <GoogleLoginButton />
        <GithubLoginButton />
        <KakaoLoginButton />
        <NaverLoginButton />
        <div className="text-center">
          <Link to="/signUp">Sign up</Link>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
