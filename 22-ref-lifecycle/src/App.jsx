import Container from "./components/Container";
import FakePost from "./components/FakePost";
import LifeCycleClass from "./components/LifeCycleClass";
import LifeCycleFunc from "./components/LifeCycleFunc";
import PostList from "./components/LifeCyclePrac";
import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunction";
import RefPrac1 from "./components/RefPrac1";
import RefPrac2 from "./components/RefPrac2";

function App() {
  return (
    <div>
      {/* <h1>ref</h1>
      <RefClass1 />
      <RefClass2 />
      <RefFunc1 />
      <RefFunc2 />
      <h1>Ref Prac1</h1>
      <RefPrac1 />
      <h1>Ref Prac2</h1>
      <RefPrac2 />
      <hr /> */}
      <h1 style={{ textAlign: "center" }}>life cycle</h1>
      {/* <LifeCycleClass /> */}
      {/* <LifeCycleFunc /> */}
      {/* <PostList /> */}
      {/* <FakePost /> */}
      <Container>
        <PostList />
      </Container>
    </div>
  );
}

export default App;
