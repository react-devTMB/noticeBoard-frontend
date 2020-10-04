import React from 'react';
import Title from '../common/Title';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SignUpPages = () => {

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
        <FormGroup>
          <Label>Password Confirm</Label>
          <Input type="password" placeholder="Password"></Input>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Sign Up</Button>
      </Form>
    );
  };

  export default SignUpPages;