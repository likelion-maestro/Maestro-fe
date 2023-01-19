import styled, { keyframes } from "styled-components";
import React from "react";

// 원 하나의 컴포넌트

const animation = keyframes`

  0%{
    background-color: #564B9A; 
    outline: 3px solid white;
    border-radius: 100%;
  }
 

`;

const Circle = styled.div`
  width: 62px;
  height: 62px;
  //true라면 박자 타지 않는 원
  //false라면 박자 타는 원
  background-color: #26206c;
  outline: 3px solid #26206c;
  border-radius: 100%;
  animation: ${animation} ${(props) => props.duration} ease-in-out infinite;
  animation-delay: ${(props) => props.delayTime};
`;

const Maetromome = (props) => {
  return (
    <>
      <Circle delayTime={props.delayTime} duration={props.duration}></Circle>
    </>
  );
};

export default Maetromome;
