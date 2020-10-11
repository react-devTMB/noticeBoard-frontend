import React, { useEffect } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';
import { Link } from "react-router-dom";
import Title from '../common/Title';
import KakaoImage from '../../assets/images/kakao_login_medium_wide.png';
import { FACEBOOK_AUTH_URL, NAVER_AUTH_URL, GITHUB_AUTH_URL } from '../common/Constants';


const LoginPage = () => {

  return (
    <div className="login_wrap">
      <Form className="login-form">
        <Title text="welcome to TMB~!!"></Title>
        <FormGroup className="mc_draw">
          <Input type="text" name="email" placeholder="Email" className="mc_checkmark"></Input>
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" placeholder="Password"></Input>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Login</Button>
        <div className="text-center pt-3">-Or continue with your social account-</div>
        <FacebookLoginButton onClick={() => window.open( FACEBOOK_AUTH_URL)}  className="mt-3 mb-3" style={{ fontSize: '15px' }} align="center" ></FacebookLoginButton>
        <GoogleLoginButton  className="mt-3 mb-3" style={{ fontSize: '15px' }} align="center" />
        <GithubLoginButton  onClick={() => window.open( GITHUB_AUTH_URL)} className="mt-3 mb-3" style={{ fontSize: '15px' }} align="center" />
        <KakaoBtn />
        <a href={NAVER_AUTH_URL} className="btn_naver"></a>
        <div className="text-center">
          <Link to="/signUp">Sign up</Link>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
        </div>
      </Form>
    </div>
  );
};


const KakaoBtn = styled(KakaoLogin)`
  display: block;
  border: 0px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
  color : #fff;
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
