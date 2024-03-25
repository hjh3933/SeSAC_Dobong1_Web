import { useMemo, useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  //before useMemo 사용전
  //   const calc = () => {
  //     console.log("calculator..");
  //     return count * 2;
  //   };

  //after useMemo 사용 반드시 리턴존재해야함
  const calc = useMemo(() => {
    console.log("calculate..");
    return count * 2;
  }, [count]);

  return (
    <>
      <h3>Use Memo</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
      {/* <p>{calc()}</p> */}
      <p>{calc}</p>
    </>
  );
}
