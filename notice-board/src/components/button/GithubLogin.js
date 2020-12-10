import React from 'react';
import { GithubLoginButton } from 'react-social-login-buttons';
import styled from 'styled-components';

import { GITHUB_AUTH_URL } from '../common/Constants';

const Button = styled(GithubLoginButton)`
  font-size: 0.9375rem !important;
`;

const GithubLogin = () => {
  const handleClick = () => {
    window.open(GITHUB_AUTH_URL);
  };
  return <Button className="mt-3 mb-3" align="center" onClick={handleClick} />;
};

export default GithubLogin;
