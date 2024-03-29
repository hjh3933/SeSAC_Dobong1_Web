import { useDispatch, useSelector } from "react-redux";
import { countMinus, countPlus } from "../store/module/counterReducer";
import { changeAction } from "../store/module/isDataReducer";

// App > Box1 > Box2
export function Box1() {
  return (
    <div style={{ border: "2px dashed pink", padding: "10px" }}>
      <h3>Box1</h3>
      <Box2 />
    </div>
  );
}

function Box2() {
  //   const state = useSelector((state) => state);
  //state는 전체 리듀서를 가져오는데 그 방법은 좋지 않다

  // index.js에서 combine하며 설정한 이름으로 가져오면 된다
  //   const rootReducer = combineReducers({
  //     isData: isDataReducer,
  //     counter: counterReducer,
  //   });
  const isData = useSelector((state) => state.isData);
  const counter = useSelector((state) => state.counter);
  //   console.log(isData);
  //   console.log(counter);
  const dispatch = useDispatch();
  return (
    <div style={{ border: "1.5px solid skyblue", padding: "10px" }}>
      <h3>Box2</h3>
      <p>count: {counter}</p>
      <p>isData: {isData.toString()}</p>
      <button
        onClick={() => {
          dispatch({ type: "counter/INCREMENT" });
        }}
      >
        count+1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "counter/DECREMENT" });
        }}
      >
        count-1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "isData/CHANGE" });
        }}
      >
        to {(!isData).toString()}
      </button>
      <br />
      <h4>다른방법으로 type보내보기</h4>
      <button
        onClick={() => {
          dispatch(countPlus());
        }}
      >
        count+1
      </button>
      <button
        onClick={() => {
          dispatch(countMinus());
        }}
      >
        count-1
      </button>
      <button
        onClick={() => {
          dispatch(changeAction());
        }}
      >
        to {(!isData).toString()}
      </button>
    </div>
  );
}
