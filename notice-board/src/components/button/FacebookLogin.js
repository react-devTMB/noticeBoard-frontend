import React from 'react';
import { FacebookLoginButton } from 'react-social-login-buttons';
import styled from 'styled-components';

import { FACEBOOK_REDIRECT_URI } from '../common/Constants';

const Button = styled(FacebookLoginButton)`
  font-size: 0.9375rem !important;
`;

const FacebookLogin = () => {
  const handleClick = () => {
    window.location = FACEBOOK_REDIRECT_URI;
  };
  return <Button className="mt-3 mb-3" align="center" onClick={handleClick} />;
};

export default FacebookLogin;
