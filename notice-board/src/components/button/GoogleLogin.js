import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';
import styled from 'styled-components';

import { GOOGLE_REDIRECT_URI } from '../common/Constants';

const Button = styled(GoogleLoginButton)`
  font-size: 0.9375rem !important;
`;

const GoogleLogin = () => {
  const handleClick = () => {
    window.location = GOOGLE_REDIRECT_URI;
  };
  return <Button className="mt-3 mb-3" align="center" onClick={handleClick} />;
};

export default GoogleLogin;
