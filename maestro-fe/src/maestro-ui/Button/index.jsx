import styled from "styled-components";

const Button = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Orbitron:wght@900&display=swap");

  position: relative;
  background-color: #564b9a;
  height: ${(props) => (props.height ? props.height : "51px")};
  width: ${(props) => (props.width ? props.width : "250px")};
  border: none;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "10px"};
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  font-family: "NanumGothic", sans-serif;

  :hover {
    background-color: rgba(86, 75, 154, 0.5);
  }

  ${(props) =>
    props.large &&
    `width:390px;
    height:61px;
    border-radius:0px;`}

  ${(props) =>
    props.small &&
    `
`}
`;

export default Button;

//사용방법 :import Button 치고, " <Button large></Button>" 으로 큰 버튼 사용할 수 있고, "<Button small></Button>"으로 작은 버튼 사용가능
