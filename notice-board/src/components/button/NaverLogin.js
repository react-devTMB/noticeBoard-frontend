import React from 'react';

import { NAVER_AUTH_URL } from '../common/Constants';

const NaverLogin = () => {
  return (
    <a href={NAVER_AUTH_URL}>
      <div className="btn_naver"></div>
    </a>
  );
};

export default NaverLogin;
