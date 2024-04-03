import { useRef, useState } from "react";

export default function Text() {
  const [text, setText] = useState<string>("");
  //1. DOM요소에 접근하는 ref
  //generic을 이용해서 타입 작성 반드시 해야함
  const ref = useRef<HTMLInputElement>(null);
  //2. 변수로 사용하는 ref
  const refVal = useRef<number>(0);

  //state변경함수
  const changeState = () => {
    // setText(ref.current?.value); //null일 수도 있어서 바로 setter가 안된다
    if (typeof ref.current?.value === "string") {
      setText(ref.current.value);
      ref.current.value = "";
      ref.current.focus();
    }
  };
  //ref변경함수
  const changeRef = (): void => {
    refVal.current += 1;
    console.log(refVal.current);
  };
  return (
    <div>
      <h4>useRef와 useState 사용해보기</h4>
      <input type="text" ref={ref} />
      <button onClick={changeState}>state 변경</button>
      <p>state: {text}</p>
      {/* null로 초기화했기 때문에 ?필요 */}
      <p>ref: {ref.current?.value}</p>
      <br />
      <button onClick={changeRef}>ref +1</button>
      <p>ref Value:{refVal.current}</p>
    </div>
  );
}
