import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from 'react-social-login-buttons';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';
import Title from '../common/Title';
import KakaoImage from '../../assets/images/kakao_login_medium_narrow.png';

const LoginPage = () => {
  return (
    <Form className="login-form">
      <Title text="welcome to TMB~!!"></Title>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Email"></Input>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="Password"></Input>
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">Login</Button>
      <div className="text-center pt-3">
        Or continue with your social account
      </div>
      <FacebookLoginButton className="mt-3 mb-3" />
      <GoogleLoginButton className="mt-3 mb-3" />
      <GithubLoginButton className="mt-3 mb-3" />
      <KakaoBtn />

      <div className="text-center">
        <a href="/sign-up">Sign up</a>
        <span className="p-2">|</span>
        <a href="/forgot-password">Forgot Password</a>
      </div>
    </Form>
  );
};

const KakaoBtn = styled(KakaoLogin)`
  display: block;
  border: 0px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
  cursor: pointer;
  margin: 1rem 5px;
  width: calc(100% - 10px);
  height: 50px;
  padding: 0px 10px;
  user-select: none;
  background: #f7e600 url(${KakaoImage}) no-repeat left center;
  background-size: auto 50px;
  text-indent: -10000px;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default LoginPage;
