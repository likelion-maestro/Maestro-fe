import styled from "styled-components";
import { AiOutlinePause } from "react-icons/ai";
import { BsRecordCircle } from "react-icons/bs";

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

//정렬에 관한 컴포넌트2
const AlignWrapper2 = styled.div`
  width: auto;
  height: auto;
  margin-top: 0px;
`;

//정렬에 관한 컴포넌트3
const AlignWrapper3 = styled.div`
  width: auto;
  height: auto;
  margin-top: 5px;
`;

const PlayBox = (props) => {
  return (
    <>
      <AllBoxWrapper>
        <AlignWrapper1>
          <EachBoxWrapper>{props.PlayTime}</EachBoxWrapper>
        </AlignWrapper1>
        <EachBoxWrapper>
          <AlignWrapper2>
            <AiOutlinePause size="50" color="#26206C" />
          </AlignWrapper2>
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

export default PlayBox;
