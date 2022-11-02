import styled from "styled-components";
import React from "react";
import { useState } from "react";
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

//빠르기를 조절하는 Seek바 영역을 포함하는 컴포넌트
const FastControlWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

//빠르기 조절 Seek바 컴포넌트
const FastControlBar = styled.div`
  width: 90%;
  height: auto;
  border: 1px solid #f2f4f6;
`;

//Seek바에서 움직일 수 있는 조절 버튼 컴포넌트
//틀만 만든것이고 Seek 바 같은 경우, 만드는 공부가 필요
const FastControlButton = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: #564b9a;
  position: absolute;
  top: 505px;
`;

const ControlBox = (props) => {
  //BPM 수치 조절하는 useState
  const [BPM, setBPM] = React.useState(100);

  //Plus 버튼 누를시 counter 1증가
  function PlusClick() {
    setBPM(BPM + 1);
  }

  function MinusClick() {
    setBPM(BPM - 1);
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
        <FastControlWrapper>
          <FastControlBar />
          <FastControlButton />
        </FastControlWrapper>
      </AllBpmConstrolBox>
    </>
  );
};

export default ControlBox;
