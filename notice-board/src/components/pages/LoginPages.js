import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons';
import { Link } from 'react-router-dom';
import Title from '../common/Title';
import { FACEBOOK_REDIRECT_URI, NAVER_AUTH_URL, GITHUB_REDIRECT_URI, KAKAO_REDIRECT_URI } from '../common/Constants';
import axios from 'axios';

const LoginPage = ({ history }) => {
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    //TODO : input validation

    await axios
      .post('/user/login', {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        console.log('response', res);

        // if (!data.email) {
        //   history.push('/signUp');
        // }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="login_wrap">
      <Form className="login-form" onSubmit={handleOnSubmit}>
        <Title text="welcome to TMB~!!"></Title>
        <FormGroup className="mc_draw">
          <Input type="text" name="email" placeholder="Email" className="mc_checkmark"></Input>
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" placeholder="Password"></Input>
        </FormGroup>
        <Button type="submit" className="btn-lg btn-dark btn-block">
          Login
        </Button>
      </Form>

      <div className="social-wrap">
        <div className="text-center pt-3">-Or continue with your social account-</div>
        <FacebookLoginButton onClick={() => (window.location = FACEBOOK_REDIRECT_URI)} className="mt-3 mb-3" style={{ fontSize: '15px' }} align="center"></FacebookLoginButton>
        <GoogleLoginButton className="mt-3 mb-3" style={{ fontSize: '15px' }} align="center" />
        <GithubLoginButton onClick={() => (window.location = GITHUB_REDIRECT_URI)} className="mt-3 mb-3" style={{ fontSize: '15px' }} align="center" />
        <button className="btn-social btn-kakao" onClick={(e) => (window.location = KAKAO_REDIRECT_URI)}></button>

        <a href={NAVER_AUTH_URL}>
          <div className="btn-social btn-naver"></div>
        </a>
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
