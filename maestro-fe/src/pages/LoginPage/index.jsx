import React from "react";
import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Layout from "../../maestro-ui/Layout";
import Button from "../../maestro-ui/Button";
import { useState, useEffect } from "react";

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

const ButtonWrapper = styled.div`
  position: relative;
  margin-top: 275px;
`;

const ButtonText = styled.div`
  position: relative;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const ForgotPassword = styled.div`
  position: relative;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  margin-top: 22px;
  color: #afafaf;
`;

const LoginPage = () => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/MainPage");
  };

  const onClickSuccess = () => {
    navigate("/Metronome");
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailValid(true);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordValid(true);
  }

  useEffect(() => {
    if(emailValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, passwordValid]);

  return (
    <Layout>
      <Header>
        <IconWrapper>
          <MdOutlineArrowBackIosNew onClick={onClickBack} size="20" />
          <LoginText>로그인</LoginText>
        </IconWrapper>
      </Header>
      <InputWrapper placeholder="이메일"  value={email} onChange={handleEmail}/>
      <InputWrapper placeholder="비밀번호"  value={password} onChange={handlePassword}/>
      <ButtonWrapper>
        <Button small disabled={notAllow}>
          <ButtonText>완료</ButtonText>
        </Button>
      </ButtonWrapper>
      <ForgotPassword>비밀번호를 잊어버렸어요</ForgotPassword>
    </Layout>
  );
};

export default LoginPage;
