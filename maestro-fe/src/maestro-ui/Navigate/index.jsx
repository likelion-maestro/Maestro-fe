import React from "react";
import styled from "styled-components";
import Metronome from "../../assets/Metronome1.png";
import Me from "../../assets/Me.png";
import Menu from "../../assets/Menu.png";
import Team from "../../assets/Team.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  background-color: #ffffff;
  bottom: 0px;
  height: 109px;
  width: 390px;
  border-radius: 30px 30px 0px 0px;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const StyledImage1 = styled.div`
  background-image: url(${Metronome});
  z-index: 1px;
  width: 47px;
  height: 65.5px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }
`;
const StyledImage2 = styled.div`
  background-image: url(${Team});
  z-index: 1px;
  width: 47px;
  height: 64px;
  cursor: pointer;
  &:hover {
    filter: brightness(0);
  }
`;
const StyledImage3 = styled.div`
  background-image: url(${Me});
  z-index: 1px;
  width: 47px;
  height: 65.5px;
  cursor: pointer;
  &:hover {
    filter: brightness(0);
  }
`;
const StyledImage4 = styled.div`
  background-image: url(${Menu});
  z-index: 1px;
  width: 47px;
  height: 65.5px;
  cursor: pointer;
  &:hover {
    filter: brightness(0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 22px;
`;

const Navigate = () => {
  //페이지 이동 함수 생성(useNavigate 사용)
  const navigate = useNavigate();

  const navigateToMetronome = () => {
    navigate("/Metronome");
  };

  const navigateToTeamList = () => {
    navigate("/TeamList");
  };

  return (
    <Container>
      <Wrapper>
        <StyledImage1 onClick={navigateToMetronome} />
        <StyledImage2 onClick={navigateToTeamList} />
        <StyledImage3 />
        <StyledImage4 />
      </Wrapper>
    </Container>
  );
};

export default Navigate;
