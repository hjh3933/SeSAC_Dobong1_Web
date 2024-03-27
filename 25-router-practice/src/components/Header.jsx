import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Headers = styled.header`
  display: flex;
  background-color: aliceblue;
  height: 100px;
  line-height: 100px;
  justify-content: flex-end;
`;
const Nav = styled.nav`
  margin-right: 20px;
`;
const MyLink = styled(Link)`
  text-decoration: none;
  color: gray;
  margin-left: 20px;
  &:hover {
    color: black;
  }
`;

export default function Header() {
  return (
    <Headers>
      <Nav>
        <MyLink to="/">홈으로</MyLink>
        <MyLink to="/student/allie">학생</MyLink>
        <MyLink to="/student/codingon">코딩온</MyLink>
        <MyLink to="/student/new?name=jisoo">query</MyLink>
      </Nav>
    </Headers>
  );
}
