import styled from "styled-components";

// 메트로늄 영역의 전체를 아우르는 컴포넌트
const AllmetroWrapper = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  background-color: #564b9a66;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

// 원 4개를 모두 포함하는 컴포넌트
const AllCircleWrapper = styled.div`
  width: 310px;
  height: auto;
  display: flex;
  justify-content: space-around;
`;

// 원 하나의 컴포넌트
const Circle = styled.div`
  width: 62px;
  height: 62px;
  background-color: #564b9a;
  border-radius: 100%;
`;

const MetronomeBox = () => {
  return (
    <>
      <AllmetroWrapper>
        <AllCircleWrapper>
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </AllCircleWrapper>
      </AllmetroWrapper>
    </>
  );
};

export default MetronomeBox;
