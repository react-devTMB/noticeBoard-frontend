import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';

import LoadingBar from '../../components/common/LoadingBar';
import Title from '../../components/common/Title';
import LoginButton from '../../components/button/Login';
import FacebookLoginButton from '../../components/button/FacebookLogin';
import GoogleLoginButton from '../../components/button/GoogleLogin';
import GithubLoginButton from '../../components/button/GithubLogin';
import KakaoLoginButton from '../../components/button/KakaoLogin';
import NaverLoginButton from '../../components/button/NaverLogin';

import { EMAIL_REG, PWD_REG } from '../../components/common/Constants';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errorTxt, setErrorTxt] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleChangeEmail = (e) => {
    const { value, parentElement } = e.target;

    if (EMAIL_REG.test(value)) {
      parentElement.classList.add('mc_checkmark');
      setErrorTxt('');
      setIsEmailValid(true);
    } else {
      parentElement.classList.remove('mc_checkmark');
      setErrorTxt('이메일 형식이 아닙니다.');
      setIsEmailValid(false);
    }
  };

  const onChangePassword = useCallback((e) => {
    e.preventDefault();

    const { value, parentElement } = e.target;

    if (value.length >= 8 && value.length <= 16 && PWD_REG.test(value)) {
      parentElement.classList.add('mc_checkmark');
      setErrorTxt('');
      setIsPasswordValid(true);
    } else {
      parentElement.classList.remove('mc_checkmark');
      setErrorTxt('비밀번호는 8자이상 16자 이하, 영문, 숫자, 특수문자 조합이어야 합니다.');
      setIsPasswordValid(false);
    }
  });

  const doLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="login_wrap">
      {loading && LoadingBar}
      <Form className="login-form" onSubmit={doLogin}>
        <Title title="welcome to TMB~!!"></Title>
        <FormGroup>
          <Input className="mc_checkmark" type="email" name="email" placeholder="Email" onChange={handleChangeEmail} />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" placeholder="Password" onChange={onChangePassword} />
        </FormGroup>
        <p className="chk_validate">{errorTxt}</p>
        <LoginButton disabled={!isEmailValid || !isPasswordValid} />
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
