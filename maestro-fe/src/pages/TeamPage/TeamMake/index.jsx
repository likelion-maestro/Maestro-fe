import { React, useState } from "react";
import Layout from "../../../maestro-ui/Layout";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import Button from "../../../maestro-ui/Button";

const Line = styled.div`
  position: relative;
  width: 387px;
  border: 1px solid #e9eaeb;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
  width: 100%;
  font-weight: 800;
  font-size: 18px;
  justify-content: center;
  align-items: center;
`;
const IconWrapper = styled.div`
  left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
const MakeTeam = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
const TeamName = styled.div`
  font-weight: 800;
  font-size: 18px;
  line-height: 18px;
  color: #564b9a;
  margin-top: 32px;
  margin-left: 100px;
  width: 100%;
`;
const StyledInput = styled.input`
  @import url("https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Orbitron:wght@900&display=swap");
  font-family: "NanumGothic", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #8b959f;
  margin-top: 13px;
  margin-left: 20px;
  width: 300px;
  height: 46px;
  background-color: #eef1f8;
  border-radius: 10px;
  border: none;
`;
const Check = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #8c95a0;
  width: 100%;
  margin-left: 110px;
  margin-top: 10px;
`;
const ButtonWrapper = styled.div`
  position: relative;
  top: 500px;
`;
const TeamMake = () => {
  const [content, setContent] = useState("");
  const textChange = (e) => {
    if (content.length > 25) {
      alert("글자수는 25자까지 입력 가능합니다.");
      setContent(e.target.value);
    } else {
      setContent(e.target.value);
    }
  };

  return (
    <Layout>
      <Header>
        <IconWrapper>
          <BiArrowBack />
        </IconWrapper>
        <MakeTeam>팀 만들기</MakeTeam>
      </Header>
      <Line />
      <TeamName> 팀 이름</TeamName>
      <StyledInput
        onChange={textChange}
        type="text"
        placeholder=" 팀 이름"
      ></StyledInput>
      <Check>
        <span>글자수 {content.length}/25</span>
      </Check>
      <ButtonWrapper>
        <Button large>팀 생성</Button>
      </ButtonWrapper>
    </Layout>
  );
};

export default TeamMake;
