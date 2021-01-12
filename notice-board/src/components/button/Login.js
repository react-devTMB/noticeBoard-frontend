import React from 'react';
import { Button } from 'reactstrap';

const Login = ({ disabled }) => {
  return (
    <Button className="btn-lg btn-dark btn-block" type="submit" disabled={disabled}>
      Login
    </Button>
  );
};

export default Login;
