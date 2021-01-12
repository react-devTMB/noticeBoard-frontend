import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

import LoadingBar from '../../components/common/LoadingBar';
import Title from '../../components/common/Title';
import SignUpButton from '../../components/button/SignUp';
import { EMAIL_REG, PWD_REG } from '../../components/common/Constants';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: '', // 닉네임
    email: '', // 이메일
    password: '', // 비밀번호
    passwordConfirm: '', // 비밀번호확인
  });
  const [errorTxt, setErrorTxt] = useState('');
  const [enabled, setEnabled] = useState({
    checkName: false,
    checkEmail: false,
    checkPassword: false,
    checkPasswordConfirm: false,
  });

  const handleChange = (e) => {
    const { name, value, parentElement } = e.target;

    setInputs({ ...inputs, [name]: value.trim() });

    switch (name) {
      case 'name':
        if (value.length > 0 && value.length <= 8) {
          parentElement.classList.add('mc_checkmark');
          setErrorTxt('');
          setEnabled({ ...enabled, checkName: true });
        } else {
          parentElement.classList.remove('mc_checkmark');
          setErrorTxt('닉네임은 8자 이하만 사용 가능합니다.');
          setEnabled({ ...enabled, checkName: false });
        }
        break;

      case 'email':
        if (EMAIL_REG.test(value)) {
          parentElement.classList.add('mc_checkmark');
          setErrorTxt('');
          setEnabled({ ...enabled, checkEmail: true });
        } else {
          parentElement.classList.remove('mc_checkmark');
          setErrorTxt('이메일 형식이 아닙니다.');
          setEnabled({ ...enabled, checkEmail: false });
        }
        break;

      case 'password':
        if (value.length >= 8 && value.length <= 16 && PWD_REG.test(value)) {
          parentElement.classList.add('mc_checkmark');
          setErrorTxt('');
          setEnabled({ ...enabled, checkPassword: true });
        } else {
          parentElement.classList.remove('mc_checkmark');
          setErrorTxt('비밀번호는 8자이상 16자 이하, 영문, 숫자, 특수문자 조합이어야 합니다.');
          setEnabled({ ...enabled, checkPassword: false });
        }
        break;

      case 'passwordConfirm':
        if (inputs.password === inputs.passwordConfirm) {
          parentElement.classList.add('mc_checkmark');
          setErrorTxt('');
          setEnabled({ ...enabled, checkPasswordConfirm: true });
        } else {
          parentElement.classList.remove('mc_checkmark');
          setErrorTxt('비밀번호가 일치하지 않습니다.');
          setEnabled({ ...enabled, checkPasswordConfirm: false });
        }
        break;

      default:
    }
  };

  const addUser = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="login_wrap">
      <Form className="login-form" onSubmit={addUser}>
        {loading && <LoadingBar />}
        <div className="login-form-02">
          <Title title="welcome to TMB~!!" />
          <FormGroup>
            <Input type="text" name="name" placeholder="NickName" value={inputs.name} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" placeholder="Email" value={inputs.email} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" placeholder="Password" value={inputs.password} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="passwordConfirm" placeholder="PasswordConfirm" value={inputs.passwordConfirm} onChange={handleChange} />
          </FormGroup>
          <p className="chk_validate">{errorTxt}</p>
          <SignUpButton disabled={!enabled.checkName || !enabled.checkEmail || !enabled.checkPassword || !enabled.checkPasswordConfirm} />
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
