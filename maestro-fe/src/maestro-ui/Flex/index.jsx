import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "initial"};
  align-items: ${(props) => props.align || "initial"};
`;

export default Flex;

/*사용법
(display: flex와 그외 설정들을 작성하기 귀찮으면 이 컴포넌트를 사용하자)
1. direction="" -> ""안에 속성명을 작성할 것(ex. row, column)
2. justify="" -> ""안에 속성명을 작성할 것(ex. space-between, center)
3. align="" -> 위와 동일
*/