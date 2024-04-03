import HeaderMenu from "../components/Header";
import Container from "../components/lecture/Container";
import EventObj from "../components/lecture/EventObj";
import GenericList from "../components/lecture/GenericList";
import { Props1, Props2, Props3 } from "../components/lecture/Props";
import Text from "../components/lecture/Text";
import TodoList from "../components/lecture/TodoList";

export default function Lecture() {
  return (
    <>
      <HeaderMenu />
      <h2>Lecture</h2>
      {/* props를 사용한다면 반드시 넘겨야한다 */}
      <Container>
        {/* <Props1 name="allie" />
        <Props2 width="100px" height="100px" color="beige" />
        <Props3 width={100} height={100} text="hello" /> */}
        {/* <Props3 width={100} height={100} color="lightblue" text="hello" /> */}
        {/* <Text /> */}
        {/* <EventObj /> */}
        {/* <TodoList /> */}
        <GenericList />
      </Container>
    </>
  );
}
