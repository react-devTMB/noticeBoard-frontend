import React, { useState, useEffect, useCallback } from 'react';
import Title from '../common/Title';
import axios from 'axios';
import { EMAIL_REG, HTTP_STATUS, PWD_REG } from '../common/Constants';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import LoadingBar from '../common/LoadingBar';

const SignUpPages = ({history}) => {

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

  const onChangePassword = useCallback(e => {
    e.preventDefault();

    const { name, value } = e.target;

    name === "password" ? setPassword(value.trim()) : setPwdConfirm(value.trim());

    if (value.length >= 8 && value.length <= 16 && PWD_REG.test(value)) {
      name === "password" ? enabled.checkPassword = true :  enabled.checkPasswordConfirm = true;
      setErrorTxt('');
      e.target.parentElement.classList.add("mc_checkmark");
    } else {
      setErrorTxt('비밀번호는 8자이상 16자 이하, 영문, 숫자, 특수문자 조합이어야 합니다.');
      e.target.parentElement.classList.remove("mc_checkmark");
      name === "password" ? enabled.checkPassword = false :  enabled.checkPasswordConfirm = false;
    }

    checkEnabled({ ...enabled });

    if(enabled.checkPassword && enabled.checkPasswordConfirm) {
      if(name === "password") {
        if((pwdConfirm === value && pwdConfirm !== "" && value !== "")){
          enabled.checkPassword = true;
          setErrorTxt('');
          e.target.parentElement.classList.add("mc_checkmark");
          e.target.parentNode.nextElementSibling.classList.add("mc_checkmark");
        } else {
          enabled.checkPassword = false;
          if(pwdConfirm !== "") {
            setErrorTxt('비밀번호가 일치하지 않습니다.');
          }
          e.target.parentElement.classList.remove("mc_checkmark");
          e.target.parentNode.nextElementSibling.classList.remove("mc_checkmark");
        }
      } else {
        if(password === value) {
          enabled.checkPasswordConfirm = true;
          setErrorTxt('');
          e.target.parentElement.classList.add("mc_checkmark");
          e.target.parentNode.previousElementSibling.classList.add("mc_checkmark");
        } else {
          enabled.checkPasswordConfirm = false;
          setErrorTxt('비밀번호가 일치하지 않습니다.');
          e.target.parentElement.classList.remove("mc_checkmark");
          e.target.parentNode.previousElementSibling.classList.remove("mc_checkmark");
        }
      }
    }
  },[password,pwdConfirm, enabled]);

  const handleOnSubmit = e => {
    e.preventDefault();

    const registForm = {
      'email' : email,
      'password' : password,
      'name' : name,
      'role_id' : 'admin'       // 임시
    };


    console.log("registForm >> " , JSON.stringify(registForm));
    setLoading(true);
    axios.post('/user/signup', registForm)
      .then(res => {
        setLoading(false);
        console.log("submit , success res >>>> ", JSON.stringify(res));
        if(res.status === HTTP_STATUS.SUCCESS) {      // 성공
          history.push('/login');
        } else {
          //TODO:실패
        }
      })
      .catch(res => {
        setLoading(false);
        console.log("fail >>>> ", JSON.stringify(res));
      });
  }

  // 회원가입 성공/실패 처리
  useEffect(() => {
    // effect
    // console.log("password, passwordConfirm" , password, pwdConfirm);
    return () => {
      // cleanup
    }
  }, [password, pwdConfirm])


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
            value={ password }
            onChange={ onChangePassword }
          />
        </FormGroup>
        <FormGroup className="form-group_02">
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="PasswordConfirm"
            onChange={ onChangePassword }
          />
        </FormGroup>
        <p className="chk_validate">{ errorTxt }</p>
        <Button disabled={  !enabled.checkName || !enabled.checkEmail || !enabled.checkPassword || !enabled.checkPasswordConfirm } className="btn-lg btn-dark btn-block" onClick={ handleOnSubmit }>Sign Up</Button>
      </Form>
    </div>
  );
};

export default SignUpPages;
