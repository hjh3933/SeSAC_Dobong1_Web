import { useState } from "react";
import apple from "../apple.jpg";
import bananas from "../banana.jpg";
import grapes from "../grape.jpg";
import peaches from "../peach.jpg";

export function HandleEx() {
  const [text, setText] = useState("Hello World!");
  function changeText() {
    setText("Goodbye World!");
  }
  return (
    <div>
      <h3>{text}</h3>
      <button onClick={changeText}>클릭</button>
    </div>
  );
}

export function HandleEx2() {
  const [color, setColor] = useState("black");
  const [text, setText] = useState("검정색");
  function changeRed() {
    setColor("red");
    setText("빨간색");
  }
  function changeBlue() {
    setColor("blue");
    setText("파란색");
  }
  return (
    <div>
      <h3 style={{ color: color }}>{text} 글씨</h3>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </div>
  );
}
export function HandleEx3() {
  const [btnText, setBtnText] = useState("사라져라");
  const [hiddenStyle, setHiddenStyle] = useState("visible");
  const [isVisibility, setIsVisibility] = useState(true);
  function hiddenEvent() {
    if (isVisibility) {
      setHiddenStyle("hidden");
      setBtnText("보여라");
      setIsVisibility(false);
    } else {
      setHiddenStyle("visible");
      setBtnText("사라져라");
      setIsVisibility(true);
    }
  }
  return (
    <div>
      <button onClick={hiddenEvent}>{btnText}</button>
      <h2 style={{ visibility: hiddenStyle }}>안녕하세요</h2>
    </div>
  );
}

export function HandleEx4() {
  const [imgSrc, setImgSrc] = useState(apple);
  const [bgColor, setBgColor] = useState("black");
  const [textColor, setTextColor] = useState("white");
  const [text, setText] = useState("text");

  //함수
  function fruitChange(e) {
    const value = e.target.value;
    if (value === "apple") {
      setImgSrc(apple);
    } else if (value === "bananas") {
      setImgSrc(bananas);
    } else if (value === "grapes") {
      setImgSrc(grapes);
    } else if (value === "peaches") {
      setImgSrc(peaches);
    }
  }
  function bgColorChange(e) {
    const value = e.target.value;
    setBgColor(value);
  }
  function textColorChange(e) {
    const value = e.target.value;
    setTextColor(value);
  }
  function textChange(e) {
    const value = e.target.value;
    setText(value);
  }
  return (
    <div>
      <span>과일: </span>
      <select
        onChange={(e) => {
          fruitChange(e);
        }}
      >
        <option value="apple">사과</option>
        <option value="grapes">포도</option>
        <option value="bananas">바나나</option>
        <option value="peaches">복숭아</option>
      </select>
      <span>배경색: </span>
      <select
        onChange={(e) => {
          bgColorChange(e);
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      <span>글자색: </span>
      <select
        onChange={(e) => {
          textColorChange(e);
        }}
      >
        <option value="black">검정</option>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
      </select>
      <br />
      <span>내용: </span>
      <input
        type="text"
        placeholder="내용을 입력하세요"
        onChange={(e) => {
          textChange(e);
        }}
      />
      <br />
      <img style={{ width: 200 }} src={imgSrc} alt="과일 사진" />
      <div
        style={{
          color: textColor,
          backgroundColor: bgColor,
          width: 100,
          padding: 5,
        }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}
