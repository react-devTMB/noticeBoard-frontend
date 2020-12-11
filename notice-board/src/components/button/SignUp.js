import React from 'react';
import { Button } from 'reactstrap';

const SignUp = ({ disabled }) => {
  return (
    <Button className="btn-lg btn-dark btn-block" type="submit" disabled={disabled}>
      Sign Up
    </Button>
  );
};

export default SignUp;
