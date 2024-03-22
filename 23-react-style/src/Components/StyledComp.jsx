import styled, { keyframes } from "styled-components";
const rotate = keyframes`
    0% {
        transform: rotate(0);
    }
    50% {
        transform: rotate(180deg);
        background-color: white;
    }
    100% {
        transform: rotate(360deg);
    }
`;

// 새로운 컴포넌트 생성
const Container = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  margin: 1rem 0 5rem;
`;
const H4Title = styled.h4`
  background-color: yellowgreen;
  /* 780이하이면서 기기 방향이 세로 */
  @media screen and (max-width: 780px) and (orientation: portrait) {
    font-size: 30px;
    color: green;
  }
  /* 780이하이면서 기기 방향이 가로 */
  @media screen and (max-width: 780px) and (orientation: landscape) {
    font-size: 40px;
    color: red;
  }
`;
const ParentDiv = styled.div`
  background-color: #444;
  display: flex;
`;
const Child = styled.span`
  color: red;
  border: 1px solid gold;
  &:hover {
    cursor: pointer;
    color: white;
    animation: ${rotate} 1s infinite linear;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    color: yellow;
  }
`;

function StyledComp() {
  return (
    <Container>
      <H4Title>styled components 이용</H4Title>
      <ParentDiv>
        <Child>el 1</Child>
        <Child>el 2</Child>
        <Child>el 3</Child>
      </ParentDiv>
    </Container>
  );
}

export default StyledComp;
