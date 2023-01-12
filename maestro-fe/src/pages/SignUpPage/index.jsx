import React from 'react';
import styled from 'styled-components';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from 'react-router';
import Layout from '../../maestro-ui/Layout';
import Button from '../../maestro-ui/Button';
import { useState, useEffect } from 'react';

const Header = styled.div`
  display: flex;
  padding: 40px;
  width: 100%;
  font-weight: 800;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 30px;
  width: 100%;
  justify-content: left;
`;

const LoginText = styled.div`
  display: flex;
  margin-top: 0px;
  margin-left: 18px;
  justify-content: left;
  font-size: 22px;
  font-weight: 400;
`;

const InputWrapper = styled.input`
  display: flex;
  width: 330px;
  margin-top: 68px;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom: 1.8px solid #afafaf;
  outline: none;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  color: #000000;
  padding: 7px 5px;

  :focus {
    outline: none;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom: 1.8px solid #7000FF;
  }
`;

const WarnMessage = styled.div`
    display: flex;
    justify-content: left;
    margin-top: 5px;
    width: 330px;
    font-size: 12px;
    color: red;
`;

const ButtonWrapper = styled.div`
  position: relative;
  margin-top: 115px;
`;

const ButtonText = styled.div`
  position: relative;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const SignUpPage = () => {
    const navigate = useNavigate();

    const onClickBack = () => {
        navigate("/MainPage");
      };

    const onClickSuccess = () => {
        navigate("/LoginPage");
      };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordCheckValid, setPasswordCheckValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handleName = (e) => {
        setName(e.target.value);
        setNameValid(true);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regex.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{7,20}$/;
        if(regex.test(password)) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
    }

    const handleCheck = (e) => {
        setPasswordCheck(e.target.value);
        setPasswordCheckValid(true);
    }

    useEffect(() => {
        if(emailValid && passwordValid && nameValid && passwordCheckValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid, passwordValid, nameValid, passwordCheckValid]);

    return (
        <Layout>
            <Header>
                <IconWrapper>
                    <MdOutlineArrowBackIosNew onClick={onClickBack} size="20" />
                    <LoginText>회원가입</LoginText>
                </IconWrapper>
            </Header>
            <InputWrapper placeholder="닉네임"  value={name} onChange={handleName}/>
            <InputWrapper placeholder="이메일" value={email} onChange={handleEmail}/>
            <WarnMessage>
                {!emailValid && email.length > 0 && (
                    <div>올바른 이메일을 입력해주세요.</div>
                )}
            </WarnMessage>
            <InputWrapper placeholder="비밀번호" type="password" value={password} onChange={handlePassword}/>
            <WarnMessage>
                {!passwordValid && password.length > 0  && password.length < 8 && (
                    <div>영문, 숫자, 특수문자 포함 최소 10자리 이상 입력해주세요.</div>
                )}
            </WarnMessage>
            <InputWrapper placeholder="비밀번호 확인" type="password" value={passwordCheck} onChange={handleCheck}/>
            <ButtonWrapper>
                <Button small disabled={notAllow}>
                    <ButtonText onClick={onClickSuccess}>입력한 정보로 회원가입</ButtonText>
                </Button>
            </ButtonWrapper>
        </Layout>
    );
};

export default SignUpPage;
