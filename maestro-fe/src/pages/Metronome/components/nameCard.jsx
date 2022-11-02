import styled from "styled-components";
const NameWrapper = styled.div`
  color: #2f343d;
  text-align: center;
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
`;

const NameCard = (props) => {
  return (
    <>
      <NameWrapper>{props.name} </NameWrapper>
    </>
  );
};

export default NameCard;
