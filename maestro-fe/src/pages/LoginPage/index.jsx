import React from 'react';
import styled from 'styled-components';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
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

const InputWrapper = styled.div`
    display: flex;
    width: 330px;
    margin-top: 88px;
    border-bottom: 1.8px solid #AFAFAF;
`;

const InputText = styled.div`
    display: flex;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 14px;
    color: #B0B7C1;
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
    color: #AFAFAF;
`

const LoginPage = () => {
    const navigate = useNavigate();

    const onClickBack = () => {
        navigate("/MainPage");
    };
    return (
        <Layout>
            <Header>
                <IconWrapper>
                    <MdOutlineArrowBackIosNew onClick={onClickBack} size="20"/>
                    <LoginText>로그인</LoginText>
                </IconWrapper>
            </Header>
            <InputWrapper>
                <InputText>이메일</InputText>
            </InputWrapper>
            <InputWrapper>
                <InputText>비밀번호</InputText>
            </InputWrapper>
            <ButtonWrapper>
                <Button small>
                    <ButtonText>완료</ButtonText>
                </Button>
            </ButtonWrapper>
            <ForgotPassword>비밀번호를 잊어버렸어요</ForgotPassword>
        </Layout>
    );
};

export default LoginPage;