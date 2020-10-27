import React, { useState, useEffect } from 'react';
import Title from '../common/Title';
import axios from 'axios';
import { EMAIL_REG, PWD_REG } from '../common/Constants';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import LoadingBar from '../common/LoadingBar';

const SignUpPages = () => {

  
  const [ name, setName ] = useState('');                 // 닉네임
  const [ email, setEmail ] = useState('');               // 이메일
  const [ password, setPassword] = useState('');          // 비밀번호
  const [ pwdConfirm, setPwdConfirm ] = useState('');     // 비밀번호 확인
  const [ errorTxt, setErrorTxt] = useState('');          // 에러메세지

  const [ enabled, checkEnabled ] = useState({
    'checkName' : false,
    'checkEmail' : false,
    'checkPassword' : false,
    'checkPasswordConfirm' : false
  });

  const [ loading, setLoading ] = useState(false);

  const onChangeName = (e) => {

    const { value } = e.target;

    setName(value.trim());

    if (value.length > 0 && value.length <= 8) {
      setErrorTxt('');
      e.target.parentElement.classList.add("mc_checkmark");
      enabled.checkName = true;
    } else {
      setErrorTxt('닉네임은 8자 이하만 사용 가능합니다.')
      e.target.parentElement.classList.remove("mc_checkmark");
      enabled.checkName = false;
    }

    checkEnabled({ ...enabled });

  };

  const onChangeEmail = (e) => {
    const { value } = e.target;

    setEmail(value.trim());

    if (EMAIL_REG.test(value)) {
      setErrorTxt('');
      e.target.parentElement.classList.add("mc_checkmark");
      enabled.checkEmail = true;
    } else {
      setErrorTxt('이메일 형식이 아닙니다.');
      e.target.parentElement.classList.remove("mc_checkmark");
      enabled.checkEmail = false;
    };

    checkEnabled({ ...enabled });
  };

  const onChangePassword = (e) => {
    const { value } = e.target;

    setPassword(value.trim());

    if (value.length >= 8 && value.length <= 16 && PWD_REG.test(value)) {
      setErrorTxt('');
      e.target.parentElement.classList.add("mc_checkmark");
      enabled.checkPassword = true;
      if (value === pwdConfirm) {
        setErrorTxt('');
        e.target.parentElement.classList.add("mc_checkmark");
        enabled.checkPassword = true;
      } else {
        setErrorTxt('비밀번호가 일치하지 않습니다.');
        e.target.parentElement.classList.remove("mc_checkmark");
        enabled.checkPassword = false;
      }
    } else {
      setErrorTxt('비밀번호는 8자이상 16자 이하, 영문, 숫자, 특수문자 조합이어야 합니다.');
      e.target.parentElement.classList.remove("mc_checkmark");
      enabled.checkPassword = false;
    }

    checkEnabled({ ...enabled });
  };

  const onChangePwdConfirm = (e) => {

    const { value } = e.target;

    setPwdConfirm(value.trim());

    console.log(password, value);

    if(value=== "" || value === undefined || value === null) {
      setErrorTxt('');
      e.target.parentElement.classList.remove("mc_checkmark");
      enabled.checkPassword = false;
    } else {
      if(value.length >= 8 && value.length <= 16 && PWD_REG.test(value)) {
        if (password === value) {
          setErrorTxt('');
          e.target.parentElement.classList.add("mc_checkmark");
          enabled.checkPasswordConfirm = true;
        } else {
          setErrorTxt('비밀번호가 일치하지 않습니다.');
          e.target.parentElement.classList.remove("mc_checkmark");
          enabled.checkPasswordConfirm = false;
        }
      } else {
        setErrorTxt('비밀번호는 8자이상 16자 이하, 영문, 숫자, 특수문자 조합이어야 합니다.');
        e.target.parentElement.classList.remove("mc_checkmark");
        enabled.checkPassword = false;
      }
    }


    checkEnabled({ ...enabled });

    console.log('enablexd> > ' , JSON.stringify(enabled));
  }


 
  const handleOnSubmit = e => {
    e.preventDefault();

    const  { registForm } = { 'name' : name, 'email' :  email, 'password' : password, 'role_id' : '1'}

    console.log("registForm >> " , registForm);
    // 회원가입 axios 연동
    setLoading(true);
    // loadingbar show
    axios.post('/api/v1/user', registForm)
      .then(res => {
        console.log("submit , success res >>>> ", JSON.stringify(res));
        setLoading(false);
        // 메인화면으로 이동
      })
      .catch(res => {
        setLoading(false);
      });
  }

  // 회원가입 성공/실패 처리
  useEffect(() => {
    // effect
    return () => {
      // cleanup
    }
  }, [])


  return (
    <div className="login_wrap">
      { loading && <LoadingBar/>}
      <Form className="login-form">
        <Title text="welcome to TMB~!!"></Title>
        <FormGroup>
          {/* addclass mc_checkmark */}
          <Input
            type="text"
            name="name"
            placeholder="nickName"
            onChange={ onChangeName }
            value={ name }
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={ onChangeEmail }
            value={ email }
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={ onChangePassword }
            value={ password }
          />
        </FormGroup>
        <FormGroup className="form-group_02">
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="PasswordConfirm"
            onChange={ onChangePwdConfirm }
            value={ pwdConfirm }
          />
        </FormGroup>
        <p className="chk_validate">{ errorTxt }</p>
        <Button disabled={  !enabled.checkName || !enabled.checkEmail || !enabled.checkPassword || !enabled.checkPasswordConfirm } className="btn-lg btn-dark btn-block" onClick={ handleOnSubmit }>Sign Up</Button>
      </Form>
    </div>
  );
};

  export default SignUpPages;