import React from 'react';
import Layout from '../../maestro-ui/Layout';
import styled from 'styled-components';
import Intro from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import { keyframes } from 'styled-components';

const ImgWrapper = styled.div`
    display: flex;
    margin-top: 300px;
`;

const animation = keyframes`
  0% {
    transform: scale3d(0,0,0);
    border-radius:0px;
  }
  50% {
      transform: scale3d(0, 0, 0);
    border-radius:100px;
  }
  100%{
    transform:scale3d(1,1,1);
    border-radius:0px;
  }
`;

const LoginWrapper = styled.div`
    width: 224px;
    margin-top: 82px;
    animation:${animation} 1s ease-in-out 1;
`;

const EmailSignup = styled.div`
    float: left;
    color: #999999;
    font-size: 14px;
    font-weight: 400;

    &:hover {
        color: #564B9A;
  }
`;

const Bar = styled.div`
    float: left;
    color: #999999;
    font-size: 14px;
    margin-left: 9%;
    font-weight: 400;
`;

const EmailLogin = styled.div`
    float: right;
    color: #999999;
    font-size: 14px;
    font-weight: 400;

    &:hover {
        color: #564B9A;
  }
`;


const MainPage = () => {

    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate("/LoginPage");
      };

    return (
        <Layout>
            <ImgWrapper>
            <img src={Intro} width="177px" height="236px"/>
            </ImgWrapper>
            <LoginWrapper>
                <EmailSignup>이메일 회원가입</EmailSignup>
                <Bar>|</Bar>
                <EmailLogin  onClick={onClickLogin}>이메일 로그인</EmailLogin>
            </LoginWrapper>
        </Layout>
    );
};

export default MainPage;