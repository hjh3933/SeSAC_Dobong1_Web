import { useRef, useState } from "react";

export function RefFunc1() {
  const inputRef = useRef();

  const handleFocus = () => {
    console.log(inputRef); //current를 담은 배열
    console.log(inputRef.current); //실제 태그
    console.log(inputRef.current.value); //태그의 값
    inputRef.current.focus();
  };
  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };
  return (
    <>
      <p>버튼 클릭 시 input에 focus처리(useRef)</p>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </>
  );
}
//ref를 변수로 사용해보기
export function RefFunc2() {
  const refVal = useRef(1);
  const [stateVal, setStateVal] = useState(1);
  let variable = 1;

  const plusRef = () => {
    refVal.current += 1;
    console.log("ref 값 확인", refVal.current);
    //콘솔창에서는 계속 증가하지만 렌더링되지는 않는다
    //아래 state값 변경하면 다시 렌더링되면서 값이 브라우저에도 적용된다
  };
  const plusState = () => {
    setStateVal(stateVal + 1);
    console.log("state 값 확인", stateVal);
  };
  const plusVariable = () => {
    variable += 1;
    console.log("variable 값 확인", variable);
    //콘솔창에서는 변하지만 렌더링되면 또 1로 초기화된다
  };
  return (
    <>
      <h3>ref: {refVal.current}</h3>
      <h3>state: {stateVal}</h3>
      <h3>variable: {variable}</h3>
      <button onClick={plusRef}>ref+1</button>
      <button onClick={plusState}>state+1</button>
      <button onClick={plusVariable}>variable+1</button>
    </>
  );
}
