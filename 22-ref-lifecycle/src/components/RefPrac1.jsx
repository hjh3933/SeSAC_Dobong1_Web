import { useRef } from "react";
import { useState } from "react";

export default function RefPrac1() {
  const [inputColor, setInputColor] = useState();
  const bgRef = useRef();
  const inputRef = useRef();

  const changeBgColor = () => {
    bgRef.current.style.backgroundColor = inputColor;
    setInputColor("");
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
        <input
          type="text"
          value={inputColor}
          onChange={(e) => setInputColor(e.target.value)}
          ref={inputRef}
          style={{ marginBottom: "10px" }}
        />
        <br />
        <button onClick={changeBgColor}>색 적용</button>
      </div>
    </>
  );
}
