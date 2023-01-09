import React from 'react';
import styled from 'styled-components';
import Intro from "../../assets/logo.png";
import Layout from '../../maestro-ui/Layout';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ImgWrapper = styled.div`
    display: flex;
    margin-top: 300px;
`;

const LandingPage = () => {
    const navigate = useNavigate();

    const timeout = () => {
        setTimeout(() => {
            navigate('/MainPage');
        }, 500);
    };

    useEffect(() => {
        timeout();
        return () => {
            clearTimeout(timeout);
        };
    });

    return (
        <Layout>
            <ImgWrapper>
            <img src={Intro} width="177px" height="236px"/>
            </ImgWrapper>
        </Layout>
    );
};

export default LandingPage;