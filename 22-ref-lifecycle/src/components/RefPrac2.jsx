import { useRef } from "react";

export default function RefPrac2() {
  const number1 = Math.floor(Math.random() * 11);
  const number2 = Math.floor(Math.random() * 11);
  const Op = ["+", "-", "x"];
  const index = Math.floor(Math.random() * 3);
  const inputRef = useRef();
  let result;
  if (Op[index] === "+") {
    result = number1 + number2;
  } else if (Op[index] === "-") {
    result = number1 - number2;
  } else if (Op[index] === "x") {
    result = number1 * number2;
  }

  const calc = () => {
    console.log(inputRef.current.value);
    const userNum = parseInt(inputRef.current.value);
    if (userNum === result) {
      alert("정답입니다!!");
    } else {
      alert("오답입니다ㅠㅠ 정답은 " + result + "!!!");
    }

    inputRef.current.focus();
    inputRef.current.value = "";
  };
  return (
    <>
      <div
        style={{
          textAlign: "center",
          width: "200px",
          padding: "5px",
        }}
      >
        <h3>
          {number1} {Op[index]} {number2}
        </h3>
        <input type="text" style={{ marginBottom: "10px" }} ref={inputRef} />
        <br />
        <button onClick={calc}>정답 제출</button>
      </div>
    </>
  );
}
