import Counter from "./Counter";
import SyntheticEvent from "./SyntheticEvent";
import EntirePractice from "./ex/EntirePractice";
import { HandleEx, HandleEx2, HandleEx3, HandleEx4 } from "./ex/HandleEx";

function App() {
  return (
    <div>
      {/* <h1>합성 이벤트</h1>
      <SyntheticEvent />
      <hr />
      <Counter />
      <hr /> */}
      {/* <h2>실습문제1</h2>
      <HandleEx />
      <hr />
      <h2>실습문제2</h2>
      <HandleEx2 />
      <hr />
      <h2>실습문제3</h2>
      <HandleEx3 />
      <hr />
      <h2>종합실습</h2>
      <HandleEx4 /> */}
      <h2 style={{ textAlign: "center" }}>종합실습 with allie </h2>
      <EntirePractice></EntirePractice>
    </div>
  );
}

export default App;
