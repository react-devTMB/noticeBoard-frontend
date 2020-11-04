import React, { useState } from 'react';
import Title from '../common/Title';
import { EMAIL_REG, PWD_REG } from '../common/Constants';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';

const SignUpPages = ({ history }) => {
  const [errorTxt, setErrorTxt] = useState('');

  const [registForm, setRegistForm] = useState({
    nickName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const validationCheck = (e) => {
    const { name, value } = e.target;

    console.log('registForm >> ', registForm);
    switch (e.target.name) {
      case 'nickName':
        if (value.length > 0 && value.length <= 8) {
          setErrorTxt('');
          e.target.parentElement.classList.add('mc_checkmark');
        } else {
          setErrorTxt('닉네임은 8자 이하만 사용 가능합니다.');
          e.target.parentElement.classList.remove('mc_checkmark');
        }
        break;
      // TODO: Email 중복체크
      case 'email':
        if (EMAIL_REG.test(value)) {
          setErrorTxt('');
          e.target.parentElement.classList.add('mc_checkmark');
        } else {
          setErrorTxt('이메일 형식이 아닙니다.');
          e.target.parentElement.classList.remove('mc_checkmark');
        }
        break;
      case 'password':
        if (value.length >= 8 && value.length <= 16 && PWD_REG.test(value)) {
          setErrorTxt('');
          e.target.parentElement.classList.add('mc_checkmark');
        } else {
          setErrorTxt('비밀번호는 8자이상 16자 이하, 영문, 숫자, 특수문자 조합이어야 합니다.');
          e.target.parentElement.classList.remove('mc_checkmark');
        }
        break;
      case 'passwordConfirm':
        if (registForm.password === value) {
          setErrorTxt('');
          e.target.parentElement.classList.add('mc_checkmark');
        } else {
          setErrorTxt('비밀번호가 일치하지 않습니다.');
          e.target.parentElement.classList.remove('mc_checkmark');
        }
        break;
      default:
        break;
    }

    setRegistForm({ ...registForm, [name]: value.trim() });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log('registForm >> ', registForm);

    await axios
      .post('/auth/register', {
        name: registForm.nickName,
        email: registForm.email,
        password: registForm.password,
        passwordConfirm: registForm.passwordConfirm,
      })
      .then((res) => {
        console.log('response', res);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="login_wrap">
      <Form className="login-form">
        <Title text="welcome to TMB~!!"></Title>
        <FormGroup>
          {/* addclass mc_checkmark */}
          <Input
            type="text"
            name="nickName"
            placeholder="NickName"
            onChange={validationCheck}
            value={registForm.nickName}
          />
        </FormGroup>
        <FormGroup>
          <Input type="email" name="email" placeholder="Email" onChange={validationCheck} value={registForm.email} />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={validationCheck}
            value={registForm.password}
          />
        </FormGroup>
        <FormGroup className="form-group_02">
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="PasswordConfirm"
            onChange={validationCheck}
            value={registForm.passwordConfirm}
          />
        </FormGroup>
        <p className="chk_validate">{errorTxt}</p>
        <Button disabled={errorTxt !== ''} className="btn-lg btn-dark btn-block" onClick={handleOnSubmit}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUpPages;
