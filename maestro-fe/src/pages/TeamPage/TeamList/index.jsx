import React from "react";
import Layout from "../../../maestro-ui/Layout";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { TbSettings } from "react-icons/tb";
import Navigate from "./../../../maestro-ui/Navigate/index";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  margin-top: ${(props) => (props.margintop ? props.margintop : "10px")};
  width: 390px;
  height: 100px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const Line = styled.div`
  position: relative;
  width: 387px;
  border: 1px solid #e9eaeb;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 45px;
  width: 100%;
  margin-left: 85%;

  text-align: center;
  font-weight: 800;
  font-size: 18px;
  line-height: 18px;
`;
const IconWrapper = styled.div`
  position: relative;
  left: ${(props) => (props.left ? props.left : "100px")};
  color: #88919b;
`;

const TextWrapper = styled.div`
  position: relative;
  top: 22px;
  left: 86px;
  font-weight: ${(props) => (props.fontweight ? props.fontweight : "800")};
  font-size: ${(props) => (props.fontsize ? props.fontsize : "16px")};
  color: ${(props) => (props.color ? props.color : "#2F343D")};
`;
const Wrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
`;
const TeamList = () => {
  const navigate = useNavigate();

  const onClick1 = () => {
    navigate("/TeamMake");
  };

  const onClick2 = () => {
    navigate("/TeamEdit");
  };
  return (
    <Layout>
      <Header>
        팀목록
        <IconWrapper>
          <AiOutlinePlus size="22px" onClick={onClick1} />
        </IconWrapper>
        <IconWrapper left="110px">
          <TbSettings size="22px" onClick={onClick2} />
        </IconWrapper>
      </Header>
      <Line />
      <Container>
        <TextWrapper>좌승찬 우민성</TextWrapper>
        <Wrapper>
          <TextWrapper fontweight="400" color="#564B9A">
            5명
          </TextWrapper>
          <TextWrapper fontweight="400" color="#8B949F">
            / 7명
          </TextWrapper>
        </Wrapper>
      </Container>
      <Container>
        <TextWrapper>좌승찬 우민성</TextWrapper>
        <Wrapper>
          <TextWrapper fontweight="400" color="#564B9A">
            5명
          </TextWrapper>
          <TextWrapper fontweight="400" color="#8B949F">
            / 7명
          </TextWrapper>
        </Wrapper>
      </Container>
      <Navigate />
    </Layout>
  );
};

export default TeamList;
