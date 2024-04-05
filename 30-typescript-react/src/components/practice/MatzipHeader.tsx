import { SetStateAction } from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  height: 100px;
  line-height: 100px;
  background-color: salmon;
`;
interface DivProps {
  textColor: boolean;
}
const Div = styled.div<DivProps>`
  font-size: 2rem;
  color: ${(props: DivProps) => (props.textColor ? "black" : "white")};
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;
interface Props {
  mapo: boolean;
  dobong: boolean;
  gandong: boolean;
  //아래 타입은 기본적으로 제공하는 정해져있는 타입이므로 기억해두기
  setMapo: React.Dispatch<SetStateAction<boolean>>;
  setDobong: React.Dispatch<SetStateAction<boolean>>;
  setGangdong: React.Dispatch<SetStateAction<boolean>>;
}
export default function MatzipHeader(props: Props) {
  const { mapo, dobong, gandong, setDobong, setGangdong, setMapo } = props;
  const setState = (func: React.Dispatch<SetStateAction<boolean>>) => {
    setDobong(false);
    setGangdong(false);
    setMapo(false);
    //다 false로 하고 들어온 setter함수만 true로 다시 변경
    func(true);
  };
  return (
    <Header>
      <Div textColor={gandong} onClick={() => setState(setGangdong)}>
        강동구
      </Div>
      <Div textColor={dobong} onClick={() => setState(setDobong)}>
        도봉구
      </Div>
      <Div textColor={mapo} onClick={() => setState(setMapo)}>
        마포구
      </Div>
    </Header>
  );
}
