export const BASE_URL = 'http://localhost:3000/login';
export const FACEBOOK_REDIRECT_URI = 'http://localhost:3000/auth/facebook';
export const OAUTH2_REDIRECT_URI = 'http://localhost:3001/oauth2/redirect';

export const NAVER_CLIENT_ID = 'ipM6oOYodgSsCLBmyOs4';
export const GITHUB_CLIENT_ID = '8e8f21a33f0f7061c117';

export const NAVER_AUTH_URL = 'https://nid.naver.com/oauth2.0/authorize?client_id=' + NAVER_CLIENT_ID + '&response_type=code&redirect_uri=' + OAUTH2_REDIRECT_URI + '&state=123qwqwqw4';

export const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize?client_id=' + GITHUB_CLIENT_ID + '&redirect_uri=' + OAUTH2_REDIRECT_URI;

export const EMAIL_REG = /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
export const PWD_REG = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/;
