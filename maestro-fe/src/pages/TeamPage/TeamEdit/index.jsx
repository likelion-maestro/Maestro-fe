import { React, useState } from "react";
import Layout from "../../../maestro-ui/Layout";
import styled from "styled-components";
import Navigate from "./../../../maestro-ui/Navigate/index";
import Button from "../../../maestro-ui/Button";
import { AiFillStar } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
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

const TextWrapper = styled.div`
  position: relative;
  top: 22px;
  left: 75px;
  font-weight: 800;
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : "#2F343D")};
`;
const ButtonWrapper = styled.div`
  position: relative;
  top: 400px;
`;
const IconWrapper = styled.div`
  position: relative;
  top: ${(props) => (props.top ? props.top : "25px")};
  left: ${(props) => (props.left ? props.left : "200px")};
  color: ${({ color }) => (color ? "#564B9A" : "#D9D9D9")};
`;
const TeamEdit = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState(false);

  const onClickComplete = () => {
    navigate("/TeamList");
  };
  return (
    <Layout>
      <Header>팀목록 편집</Header>
      <Line />
      <Container>
        <TextWrapper>좌승찬 우민성</TextWrapper>
        <IconWrapper color={color} onClick={() => setColor(!color)}>
          <AiFillStar size="24px" />
        </IconWrapper>
        <IconWrapper top="28px" left="220px">
          <FaTrashAlt size="16px" />
        </IconWrapper>
      </Container>
      <ButtonWrapper>
        <Button small onClick={onClickComplete}>
          완료
        </Button>
      </ButtonWrapper>
      <Navigate />
    </Layout>
  );
};

export default TeamEdit;
