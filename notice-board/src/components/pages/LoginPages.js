import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons';
import Title from '../common/Title';



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
                <div className="text-center pt-3">Or continue with your social account</div>
                <FacebookLoginButton className="mt-3 mb-3"/>
                <GoogleLoginButton className="mt-3 mb-3"/>
                <GithubLoginButton className="mt-3 mb-3 btn_kakao"/>
                <div className="text-center">
                    <a href="/sign-up">Sign up</a>
                    <span className="p-2">|</span>
                    <a href="/forgot-password">Forgot Password</a>
                </div>
        </Form>
    )
};

export default LoginPage;