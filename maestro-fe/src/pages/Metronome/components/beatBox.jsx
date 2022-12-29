import styled from "styled-components";
import { FaDrum } from "react-icons/fa";

//비트에 관련된 3개의 정보를 모두 포함한 컴포넌트
const AllBoxWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
//비트에 관련된 정보 각각 박스의 컴포넌트
const EachBoxWrapper = styled.div`
  width: 70px;
  height: 40px;
  margin: 35px;
`;

//비트에 관련된 정보 각각 박스 제목의 컴포넌트
const EachBoxTitle = styled.div`
  width: 70px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;

//비트에 관련된 정보 각각 내용의 컴포넌트
const EachBoxContent = styled.div`
  width: 70px;
  font-weight: 400;
  font-size: 36px;
  line-height: 22px;
  text-align: center;
  margin-top: 17px;
`;

const BeatBox = () => {
  return (
    <>
      <AllBoxWrapper>
        <EachBoxWrapper>
          <EachBoxTitle>Beats</EachBoxTitle>
          <EachBoxContent>4</EachBoxContent>
        </EachBoxWrapper>
        <EachBoxWrapper>
          <EachBoxTitle>Notes</EachBoxTitle>
          <EachBoxContent>1</EachBoxContent>
        </EachBoxWrapper>
        <EachBoxWrapper>
          <EachBoxTitle>Manual</EachBoxTitle>
          <EachBoxContent>
            <FaDrum size="29" />
          </EachBoxContent>
        </EachBoxWrapper>
      </AllBoxWrapper>
    </>
  );
};

export default BeatBox;
