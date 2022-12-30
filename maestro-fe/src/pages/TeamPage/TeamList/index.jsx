import React from "react";
import Layout from "../../../maestro-ui/Layout";
import styled from "styled-components";
import Navigate from "../../../maestro-ui/Navigate/index";
import { AiOutlinePlus } from "react-icons/ai";
import { TbSettings } from "react-icons/tb";

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

const TeamList = () => {
  return (
    <Layout>
      <Header>
        팀목록
        <IconWrapper>
          <AiOutlinePlus size="22px" />
        </IconWrapper>
        <IconWrapper left="110px">
          <TbSettings size="22px" />
        </IconWrapper>
      </Header>

      <Line />
      <Container />
      <Navigate />
    </Layout>
  );
};

export default TeamList;
