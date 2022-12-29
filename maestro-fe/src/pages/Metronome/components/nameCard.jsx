import styled from "styled-components";
import { FiShare2 } from "react-icons/fi";

//최상단 이름 구간을 포함하는 컴포넌트
const AllNameWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  margin-bottom: 29px;
`;

//이름 만을 포함하는 컴포넌트
const NameWrapper = styled.div`
  color: #2f343d;
  text-align: center;
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
`;

// 공유하기 아이콘과 인원 수를 포함하는 컴포넌트
const IconPeopleWrapper = styled.div`
  width: 50px;
  height: auto;
  display: flex;
  margin-right: 36px;
  align-content: center;
`;

// 인원 수 컴포넌트
const People = styled.div`
  width: auto;
  height: auto;
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
  margin-left: 12px;
`;

const NameCard = (props) => {
  return (
    <>
      <AllNameWrapper>
        <IconPeopleWrapper />
        <NameWrapper>{props.name} </NameWrapper>
        <IconPeopleWrapper>
          <FiShare2 size="20" />
          <People>{props.people}</People>
        </IconPeopleWrapper>
      </AllNameWrapper>
    </>
  );
};

export default NameCard;
