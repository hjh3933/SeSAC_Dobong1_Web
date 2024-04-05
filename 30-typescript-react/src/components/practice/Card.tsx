import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  imgSrc: string;
  title: string;
  desc: string;
}
const CardDiv = styled.div`
  width: 240px;
  background-color: whitesmoke;
  height: 300px;
  margin: 1rem;
  box-shadow: 0px 0px 10px #aaaa;
  text-align: center;
  border-radius: 10px;
  padding: 0 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;
interface divProps {
  src: string;
}
const ImgDiv = styled.div<divProps>`
  width: 80%;
  height: 150px;
  border: 1px solid gray;
  margin: 1rem auto;
  background-image: url(${(props: divProps) => props.src});
  background-size: cover;
  background-position: center;
`;
const DescP = styled.p`
  margin-top: 0.5rem;
  font-size: 14px;
  /* 말줄임 표시를 하기위한 css속성 */
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; //2줄이 넘어가면 말줄임표시
`;
export default function Card({ imgSrc, title, desc }: Props) {
  const navi = useNavigate();
  return (
    // 주소에 슬래시 생략하면 현재 주소에 + 되서 지정됨
    <CardDiv onClick={() => navi(`${title}`)}>
      <ImgDiv src={imgSrc}>imgSrc</ImgDiv>
      <h3>{title}</h3>
      <DescP>{desc}</DescP>
    </CardDiv>
  );
}
