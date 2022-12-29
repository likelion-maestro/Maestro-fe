import styled from "styled-components";
import { AiOutlinePause } from "react-icons/ai";
import { BsRecordCircle } from "react-icons/bs";
import { SlControlPlay } from "react-icons/sl";
import { useEffect, useState } from "react";

//재생에 관련된 3개의 정보 각각 박스의 컴포넌트
const AllBoxWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
//재생에 관련된 정보 각각 박스의 컴포넌트
const EachBoxWrapper = styled.div`
  width: 70px;
  height: 50px;
  margin: 30px;
  text-align: center;
  font-weight: 400;
  font-size: 18px;
`;

//정렬에 관한 컴포넌트1
const AlignWrapper1 = styled.div`
  width: auto;
  height: auto;
  margin-top: 15px;
`;

//정렬에 관한 컴포넌트(=멈춤 부분)
const AlignWrapper2A = styled.div`
  width: auto;
  height: auto;
  margin-top: 0px;
`;

//정렬에 관한 컴포넌트( > 재생 부분)
const AlignWrapper2B = styled.div`
  width: auto;
  height: auto;
  margin-top: 8px;
  margin-left: 5px;
`;

//정렬에 관한 컴포넌트3
const AlignWrapper3 = styled.div`
  width: auto;
  height: auto;
  margin-top: 5px;
`;

let exportStopValue = false;

const PlayBox = (props) => {
  const [stopValue, setStopValue] = useState(false);

  const stopButtomFun = () => {
    setStopValue(stopValue === false ? true : false);
    console.log(stopValue);
    exportStopValue = stopValue;
    console.log(exportStopValue);
  };

  return (
    <>
      <AllBoxWrapper>
        <AlignWrapper1>
          <EachBoxWrapper>{props.PlayTime}</EachBoxWrapper>
        </AlignWrapper1>

        <EachBoxWrapper>
          {stopValue ? (
            <AlignWrapper2A>
              <AiOutlinePause
                size="50"
                color="#26206C"
                onClick={stopButtomFun}
              />
            </AlignWrapper2A>
          ) : (
            <AlignWrapper2B>
              <SlControlPlay
                size="40"
                color="#26206C"
                onClick={stopButtomFun}
              />
            </AlignWrapper2B>
          )}
        </EachBoxWrapper>

        <EachBoxWrapper>
          <AlignWrapper3>
            <BsRecordCircle size="40" color="red" />
          </AlignWrapper3>
        </EachBoxWrapper>
      </AllBoxWrapper>
    </>
  );
};
export { exportStopValue };
export default PlayBox;
