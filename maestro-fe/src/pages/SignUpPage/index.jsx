import React from 'react';
import styled from 'styled-components';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from 'react-router';
import Layout from '../../maestro-ui/Layout';
import Button from '../../maestro-ui/Button';

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
    color: #AFAFAF;
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
    }

    

    return (
        <Layout>
            <Header>
                <IconWrapper>
                    <MdOutlineArrowBackIosNew onClick={onClickBack} size="20" />
                    <LoginText>회원가입</LoginText>
                </IconWrapper>
            </Header>
            <InputWrapper placeholder="닉네임" />
            <InputWrapper placeholder="이메일" />
            <InputWrapper placeholder="비밀번호" type="password" minlength = "8"/>
            <WarnMessage>최소 8자리 이상으로 설정해주세요.</WarnMessage>
            <InputWrapper placeholder="비밀번호 확인" type="password" />
            <ButtonWrapper>
                <Button small>
                    <ButtonText onClick={onClickSuccess}>입력한 정보로 회원가입</ButtonText>
                </Button>
            </ButtonWrapper>
        </Layout>
    );
};

export default SignUpPage;