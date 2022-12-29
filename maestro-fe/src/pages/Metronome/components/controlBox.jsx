import styled from "styled-components";
import React from "react";
import "./ControlBar.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

//BPM 조절 박스 전체 정렬을 위한 컴포넌트

const AllBpmConstrolBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// BPM 관련 조절과 관련된 모든걸 포함한 컴포넌트
const BpmControlBox = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
`;

//Bpm 수치 컴포넌트
const BpmInfo = styled.div`
  width: auto;
  height: auto;
  font-weight: 400;
  font-size: 48px;
  line-height: 48px;
  display: flex;
  padding-right: 30px;
`;

//BPM 단위 표시 컴포넌트
const BpmUnit = styled.div`
  width: 38px;
  height: 100%;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding-top: 14px;
  padding-left: 15px;
`;

//+, - 아이콘 정렬 컴포넌트
const IconWrraper = styled.div`
  width: auto;
  height: auto;
  padding-top: 10px;
`;

const ControlBox = (props) => {
  //BPM 수치 조절하는 useState
  const [BPM, setBPM] = React.useState(100);

  //Plus 버튼 누를시 counter 1증가
  function PlusClick() {
    if (BPM < 200) {
      setBPM(BPM + 1);
    }
  }

  //Minus 버튼 누릴시 counter 1감소
  function MinusClick() {
    if (BPM > 0) {
      setBPM(BPM - 1);
    }
  }

  return (
    <>
      <AllBpmConstrolBox>
        <BpmControlBox>
          <IconWrraper>
            <AiOutlineMinus onClick={MinusClick} size="35" />
          </IconWrraper>
          <BpmUnit />
          <BpmInfo>
            {BPM} <BpmUnit>BPM</BpmUnit>
          </BpmInfo>
          <IconWrraper>
            <AiOutlinePlus onClick={PlusClick} size="35" />
          </IconWrraper>
        </BpmControlBox>

        <input
          type="range"
          min={0}
          max={200}
          step={5}
          value={BPM}
          onChange={(event) => {
            setBPM(event.target.valueAsNumber);
          }}
        />
      </AllBpmConstrolBox>
    </>
  );
};

export default ControlBox;
