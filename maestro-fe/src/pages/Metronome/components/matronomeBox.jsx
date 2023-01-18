import styled, { keyframes } from "styled-components";
import Maetromome from "./matronome";
import { useEffect, useState } from "react";
import { exportStopValue } from "./playBox";
import axios from "axios";

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
  width: 85%;
  height: auto;
  display: flex;
  justify-content: space-around;
`;

const MetronomeBox = (props) => {
  const arr = [
    { id: 1, check: "0.5s" },
    { id: 2, check: "1.0s" },
    { id: 3, check: "1.5s" },
    { id: 4, check: "2.0s" },
  ];

  const arr2 = [
    { id: 1, check: "0.5s" },
    { id: 2, check: "1.0s" },
    { id: 3, check: "1.5s" },
    { id: 4, check: "2.0s" },
  ];

  const [matromomeList, setMatromomeList] = useState([]);

  useEffect(() => {
    props.boolCheck
      ? setMatromomeList(
          arr.map((eachCircle) => <Maetromome delayTime={eachCircle.check} />)
        )
      : setMatromomeList(
          arr2.map((eachCircle) => <Maetromome delayTime={eachCircle.check} />)
        );
  }, []);

  return (
    <>
      <AllmetroWrapper>
        <AllCircleWrapper>{matromomeList}</AllCircleWrapper>
      </AllmetroWrapper>
    </>
  );
};

export default MetronomeBox;
