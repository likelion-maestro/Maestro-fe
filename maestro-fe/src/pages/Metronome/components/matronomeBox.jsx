import styled, { keyframes } from "styled-components";
import Maetromome from "./matronome";
import { useEffect, useState } from "react";
import { exportStopValue } from "./playBox";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

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
  const BPM = useSelector(function (state) {
    return state;
  });

  var waitTime = 60 / BPM;
  var duration = waitTime * 4 + "s";
  var arr = [
    { id: 1, check: 0 + "s" },
    { id: 2, check: waitTime + "s" },
    { id: 3, check: waitTime * 2 + "s" },
    { id: 4, check: waitTime * 3 + "s" },
  ];

  var arr2 = [
    { id: 1, check: "0s" },
    { id: 2, check: "0s" },
    { id: 3, check: "0s" },
    { id: 4, check: "0s" },
  ];

  const [matromomeList, setMatromomeList] = useState([]);
  var stop = props.boolStop;
  useEffect(() => {
    console.log(arr, BPM);
    console.log(props.boolStop);
    stop
      ? setMatromomeList(
          arr.map((eachCircle) => (
            <Maetromome delayTime={eachCircle.check} duration={duration} />
          ))
        )
      : setMatromomeList(
          arr2.map((eachCircle) => (
            <Maetromome delayTime={eachCircle.check} duration={duration} />
          ))
        );
  }, [BPM, stop]);

  return (
    <>
      <AllmetroWrapper>
        <AllCircleWrapper>{matromomeList}</AllCircleWrapper>
      </AllmetroWrapper>
    </>
  );
};

export default MetronomeBox;
