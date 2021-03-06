export const BASE_URL = 'http://localhost:3000/login';
export const FACEBOOK_REDIRECT_URI = 'http://localhost:3000/oauth/facebook';
export const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/kakao';
export const GITHUB_REDIRECT_URI = 'http://localhost:3000/oauth/github';
export const GOOGLE_REDIRECT_URI = 'http://localhost:3000/oauth/google';
export const NAVER_REDIRET_URI = 'http://localhost:3001/oauth/naver/callback';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3001/oauth2/redirect';
export const OAUTH2_REDIRECT_URI_02 = 'http://localhost:3000/login';

export const NAVER_CLIENT_ID = 'ipM6oOYodgSsCLBmyOs4';
export const GITHUB_CLIENT_ID = '8e8f21a33f0f7061c117';

export const NAVER_AUTH_URL = 'https://nid.naver.com/oauth2.0/authorize?client_id=' + NAVER_CLIENT_ID + '&response_type=code&redirect_uri=' + OAUTH2_REDIRECT_URI_02 + '&state=123qwqwqw4';

export const EMAIL_REG = /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
export const PWD_REG = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/;

export const HTTP_STATUS = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 403,
  NOT_FOUND: 404,
  NOT_ALLOWED_METHOD: 405,
  INTERNAL_SERVER_ERROR: 500,
};
