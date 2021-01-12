import React from 'react';
import styled from 'styled-components';
import KakaoLoginButton from 'react-kakao-login';

import KakaoImage from '../../assets/images/kakao_login_medium_wide.png';

const Button = styled(KakaoLoginButton)`
  display: block;
  margin: 1rem 5px;
  padding: 0 10px;
  border: 0;
  border-radius: 3px;
  width: calc(100% - 10px);
  height: 50px;
  background: #f7e600 url(${KakaoImage}) no-repeat left center;
  background-size: auto 45px;
  color: #ffffff;
  font-size: 0.9375rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
  user-select: none;
  text-indent: -10000px;

  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

const KakaoLogin = () => {
  return <Button />;
};

export default KakaoLogin;
