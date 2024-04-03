import React from "react";

export default function EventObj() {
  // 함수 따로 적으면 any or React.MouseEvent<이벤트달린태그>로 타입 반드시 적어야함
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    console.log(e.target);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    console.log(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 3가지 모두 누른 키의 정보를 알려주지만 각각 다른 방법으로 알려준다
    console.log(e.code);
    console.log(e.key);
    console.log(e.keyCode);
    if (e.key === "Enter") {
      console.log("enter가 눌렸네요!!!!!!!!!!!!!!!!!");
    }
  };
  return (
    <div>
      {/* e타입 적지않아도 ㄱㅊ */}
      <div onClick={(e) => console.log(e.target)}>onClick</div>
      <div onClick={handleClick}>onClick!</div>
      <div>
        <span>onChange</span>
        <input type="text" onChange={handleChange} />
      </div>
      <div>
        <span>onKeyDown</span>
        <input type="text" onKeyDown={handleKeyDown} />
      </div>
    </div>
  );
}
