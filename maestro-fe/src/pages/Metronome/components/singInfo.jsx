import styled from "styled-components";
import { MdOutlineMusicNote } from "react-icons/md";
import { BsFillCaretDownFill } from "react-icons/bs";

//곡 관련 정보를 전부 담고 있는 컴포넌트
const AllSingInfoWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 23px;
`;

//곡 이름과 양쪽 아이콘을 포함하는 컴포넌트
const SingNameWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//곡 이름을 포함하는 컴포넌트
const SingName = styled.div`
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
  margin-left: 16px;
  margin-right: 8px;
`;

//아이콘 정렬을 맞추기 위한 컴포넌트
const IconAlign = styled.div`
  width: auto;
  height: auto;
  padding-top: 6px;
`;

//빠르기 영역 전체를 포함하는 컴포넌트
const HowFastWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;
`;

//빠르기의 텍스트 부분을 맞고 있는 컴포넌트
const HowFast = styled.div`
  width: auto;
  height: auto;
  font-size: 18px;
  align-content: center;
  font-weight: 400;
  margin: 10px;
`;

const Singinfo = (props) => {
  return (
    <>
      <AllSingInfoWrapper>
        <SingNameWrapper>
          <MdOutlineMusicNote />
          <SingName>{props.SingName}</SingName>
          <IconAlign>
            <BsFillCaretDownFill />
          </IconAlign>
        </SingNameWrapper>
        <HowFastWrapper>
          <HowFast>{props.Fast}</HowFast>
        </HowFastWrapper>
      </AllSingInfoWrapper>
    </>
  );
};

export default Singinfo;
