import styled, { keyframes } from "styled-components";
import Maetromome from "./matronome";
import { useEffect, useState } from "react";
import { exportStopValue } from "./playBox";

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

///////////////////////이 부분 현재 시도중
const MetronomeBox = (props) => {
  /*
  const [check, chageCheck] = useState(true);

  var chageCircle = setInterval(
    chageCheck((check) => !check),
    5000
  );
  */
  ////////////////////////

  //원 개수 임의 지정
  // 배열 형태로 받으면 그 개수에 따라 원 출력
  // 5개까진 괜찮은데 이후엔 좀 이상해짐. 이래도 되는건가?
  //check=>delayTime으로 언제 시작하는지 정해줘야됌.
  // 뿐만 아니라 maestronome.jsx의 animation-duration부분과 합을 잘 맞추는 계산 식이 필요함.
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
