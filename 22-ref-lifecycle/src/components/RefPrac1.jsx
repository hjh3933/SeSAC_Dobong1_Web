import { useRef } from "react";

export default function RefPrac1() {
  const bgRef = useRef();
  const inputRef = useRef();

  const changeBgColor = () => {
    bgRef.current.style.backgroundColor = inputRef.current.value;
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <>
      <div
        style={{
          textAlign: "center",
          width: "200px",
          padding: "5px",
        }}
        ref={bgRef}
      >
        <input type="text" ref={inputRef} style={{ marginBottom: "10px" }} />
        <br />
        <button onClick={changeBgColor}>색 적용</button>
      </div>
    </>
  );
}
