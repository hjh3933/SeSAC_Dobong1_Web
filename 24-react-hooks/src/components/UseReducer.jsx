import { useReducer, useState } from "react";
const reducer = (prevState, action) => {
  //action: state를 어떻게 바꿀지에 대한 요구
  //dispatch: action을 담아서 reducer로 전달
  console.log("dispatch가 호출되면 reducer동작");
  console.log(action);

  //reducer내부의 로직은 switch, if등의 조건문을 많이 씀
  switch (action.type) {
    case "deposit":
      return prevState + action.payload;
    case "withdraw":
      return prevState - action.payload;
  }
};

export default function UseReducer() {
  const [number, setNumber] = useState(0);

  //const [스테이트, 디스패치] = useReducer(리듀서 ,스테이트의 초기값)
  //reducer: 실제로 state를 바꿔주는 함수 set함수와 비슷

  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h3>useReducer사용</h3>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        step={1000}
      />
      {/* {오브젝트가 곧} action값으로 전달되는 것 보통 obj형태로 액션을 전달함 */}
      <button onClick={() => dispatch({ type: "deposit", payload: number })}>
        예금
      </button>
      <button onClick={() => dispatch({ type: "withdraw", payload: number })}>
        출금
      </button>
    </>
  );
}
