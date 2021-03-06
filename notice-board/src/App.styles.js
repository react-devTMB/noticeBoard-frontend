import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f9f9f9;
  }
  @media screen and (min-width: 700px) and (min-height: 450px) {
    .mc_subWrap01 .mc_header {
      position: fixed;
      z-index: 100;
    }
  }
  @-webkit-keyframes mc_checkmark {
    0% {
      height: 0;
      width: 0;
      opacity: 1;
    }
    20% {
      height: 0;
      width: 7.25px;
      opacity: 1;
    }
    40% {
      height: 14.5px;
      width: 7.25px;
      opacity: 1;
    }
    100% {
      height: 14.5px;
      width: 7.25px;
      opacity: 1;
    }
  }
  @-moz-keyframes mc_checkmark {
    0% {
      height: 0;
      width: 0;
      opacity: 1;
    }
    20% {
      height: 0;
      width: 7.25px;
      opacity: 1;
    }
    40% {
      height: 14.5px;
      width: 7.25px;
      opacity: 1;
    }
    100% {
      height: 14.5px;
      width: 7.25px;
      opacity: 1;
    }
  }
  @keyframes mc_checkmark {
    0% {
      height: 0;
      width: 0;
      opacity: 1;
    }
    20% {
      height: 0;
      width: 7.25px;
      opacity: 1;
    }
    40% {
      height: 14.5px;
      width: 7.25px;
      opacity: 1;
    }
    100% {
      height: 14.5px;
      width: 7.25px;
      opacity: 1;
    }
  }

  .mc_none {
    display: none !important;
  }
  .mc_hide {
    position: absolute !important;
    left: -10000px;
    top: -10000px;
    visibility: hidden;
  }

  /*AutoForm*/
  .mc_subWrap01 {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 100%;
  }
  .mc_subWrap01 .mc_authWrap01 {
    position: relative;
    z-index: 1;
    background: #ffffff;
    margin: 0 auto;
    width: 85%;
    height: 90%;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    margin-top: 35px;
  }
  .mc_authWrap01 .mc_header01 {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 100px;
    background: #fff;
    margin-top: 50px;
  } /*border-bottom:1px solid #e7e9ec;*/
  /* .mc_authWrap01 .mc_header01 .mc_logo_area {position: relative; width: 120px; height: 20px;  background:url("./images/logo_01.PNG") no-repeat center center; background-size:100% auto; padding: 15px 50px; margin: 5px 20px; } */
  .mc_title_basic01 {
    position: relative;
    margin-top: 30px;
    font-size: 1.7em;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    color: #495057;
  }
  .mc_authWrap01 .mc_contentWrap01 {
    position: relative;
    height: 100%;
    padding-top: 150px;
  }
  /* login */
  .mc_loginWrap {
    padding: 5px;
  }
  .form-control {
    border: none;
  }
  .mc_text_input {
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid #dee2e6;
    width: 78%;
    margin-top: 1rem;
    padding: 0.5rem;
    text-decoration: none;
  }
  .mc_text_input:hover {
    border-bottom: 1px solid #000;
  }
  .mc_checkmark {
    position: relative;
  }
  .mc_checkmark.form-group:after {
    -webkit-animation-delay: 50ms;
    -moz-animation-delay: 50ms;
    animation-delay: 50ms;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease;
    -moz-animation-timing-function: ease;
    animation-timing-function: ease;
    -webkit-animation-name: mc_checkmark;
    -moz-animation-name: mc_checkmark;
    animation-name: mc_checkmark;
    -webkit-transform: scaleX(-1) rotate(135deg);
    -moz-transform: scaleX(-1) rotate(135deg);
    transform: scaleX(-1) rotate(135deg);
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .mc_checkmark:after {
    position: absolute;
    top: 30px;
    opacity: 0;
    height: 14.5px;
    width: 7.25px;
    right: 40px;
    -webkit-transform-origin: left top;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    transform-origin: left top;
    border-right: 2px solid #000;
    border-top: 2px solid #000;
    border-radius: 2.5px !important;
    content: '';
  }
  .mc_loginWrap_02 {
    position: relative;
    margin-top: 25px;
    display: flex;
  }
  .mc_loginWrap .mc_signup {
    display: inline;
    font-size: 0.8em;
    font-weight: bold;
  }
  .mc_loginWrap .mc_signup a > :first-child {
    display: block;
    left: 45px;
  }
  .mc_loginWrap .mc_signup .mc_find_pwd {
    position: absolute;
    padding: 20px 0px;
  }
  .mc_loginWrap .mc_signup .mc_find_pwd > p {
    color: #8e8e93;
    font-size: 0.7rem;
    font-style: italic;
    font-weight: lighter;
  }
  .mc_loginWrap .mc_circle {
    position: absolute;
    top: -5px;
    right: 10px;
  }
  .mc_loginWrap .mc_circle span {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid black;
    margin-right: 15px;
  }
  .mc_loginWrap .mc_circle span p {
    text-align: center;
    padding-top: 5px;
  }
  .mc_loginWrap .mc_sign_in {
    position: absolute;
    font-weight: bold;
    font-size: small;
    left: 0;
    margin: 80px 40px;
  }

  /* button */
  .mc_authWrap01 .mc_btn_basic01 {
    position: relative;
    background-color: black;
    color: #fff;
    padding: 20px;
    text-align: center;
    font-size: 0.85em;
    top: 80px;
    width: 85%;
    margin: auto;
    border: none;
  }
  .mc_btn_basic01:disabled {
    opacity: 0.2;
  }
  .mc_toast {
    position: fixed;
    left: 50%;
    bottom: 120px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 80%;
    max-width: 480px;
    height: 46px;
    padding: 5px 15px;
    font-size: 0.875rem;
    color: #fff;
    background: rgba(50, 50, 50, 0.8);
    border-radius: 23px;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 300;
  }
  .mc_toast > * {
    display: block;
    width: 100%;
    text-align: center;
  }

  .arrow_box {
    position: relative;
    background: #ffffff;
    border: 4px solid #292929;
  }
  .arrow_box:after,
  .arrow_box:before {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .arrow_box:after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff;
    border-width: 10px;
    margin-left: -10px;
  }
  .arrow_box:before {
    border-color: rgba(41, 41, 41, 0);
    border-bottom-color: #292929;
    border-width: 16px;
    margin-left: -16px;
  }

  /** bootstrap cutom**/
  a {
    color: #343a40;
  }
  a:visited {
    color: #000;
  }
  .navbar {
    padding: 1.5rem 1.5rem;
  }
  .navbar-expand .navbar-nav .nav-link {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
  .btn_basic01 {
    position: relative;
    background-color: black;
    color: #fff;
    padding: 15px;
    text-align: center;
    font-size: 0.85em;
    width: 85%;
    margin: auto;
    border: none;
  }
  .tmb_margin_20 {
    position: relative;
    margin-right: 25px;
  }

  /** login */
  .login-form,
  .social-wrap {
    position: relative;
    width: 100%;
    max-width: 330px;
    padding: 15px;
    height: 100%;
    margin: auto;
  }
  .login_wrap {
    display: block;
    width: 80;
    border: 1px solid #00000033;
    width: 500px;
    margin: 0 auto;
    margin-top: 60px;
    padding: 40px 20px;
    background-color: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .login_form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    text-align: center;
    width: 30%;
    height: 50%;
    border: 1px solid #d8dee2;
    border-radius: 5px;
  }
  .form-group {
    margin-bottom: 2rem;
    padding: 10px;
  }
  .form-group_02 {
    margin-bottom: 1rem;
    padding: 10px;
  }
  .login_form .mc_circle {
    position: absolute;
  }
  .login_form .mc_circle span {
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid black;
    margin-right: 20px;
    text-align: center;
  }
  .login100-form {
    width: 100%;
  }
  .login100-form-title {
    display: block;
    font-family: Poppins-Bold;
    font-size: 30px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
  }
  .btn_kakao {
    background: #f7e600;
  }
  .login_wrap .form-control {
    border: none;
    border-bottom: 1px solid#80808091;
    border-radius: 0%;
  }
  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #000;
    text-decoration: none;
    outline: 0;
  }
  #naverIdLogin_loginButton {
    display: block;
    border: 0px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
    color: #fff;
    cursor: pointer;
    margin: 1rem 5px;
    width: calc(100% - 10px);
    height: 50px;
    padding: 0px 10px;
    user-select: none;
    background: #1ec800 url('./images/naver_button.jpg') no-repeat left center;
    background-size: auto 65px;
    text-indent: -10000px;
  }
  #naverIdLogin_loginButton:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
  .chk_validate {
    color: red;
    display: block;
    padding: 10px;
    font-size: 0.75rem;
    text-align: center;
  }
  .makeStyles-root-1 + .login-form , .makeStyles-root-1 ~ .social-wrap, .makeStyles-root-1 + .login-form-02 { 
    opacity: 0;
  }
`;
