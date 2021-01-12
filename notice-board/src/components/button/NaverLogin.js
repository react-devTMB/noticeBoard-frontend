import React from 'react';
import styled from 'styled-components';

import { NAVER_AUTH_URL } from '../common/Constants';
import NaverImage from '../../assets/images/naver_button.jpg';

const Button = styled.button`
  display: block;
  border: 0px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
  color: #ffffff;
  margin: 1rem 5px;
  width: calc(100% - 10px);
  height: 50px;
  padding: 0px 10px;
  user-select: none;
  font-size: 0.9375rem;
  background: #1ec800 url(${NaverImage}) no-repeat left center;
  background-size: auto 65px;
  text-indent: -10000px;

  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

const NaverLogin = () => {
  const handleClick = () => {
    window.location = NAVER_AUTH_URL;
  };
  return <Button onClick={handleClick} />;
};

export default NaverLogin;
