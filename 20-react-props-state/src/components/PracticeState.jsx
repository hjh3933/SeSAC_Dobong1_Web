import { useState } from "react";

export function PracticeState() {
  const [number, setNumber] = useState(0);
  const [emoji, setEmogi] = useState("😗");
  function AddNum() {
    setNumber(number + 1);
  }
  function MinusNum() {
    setNumber(number - 2);
  }
  return (
    <div>
      <div>
        값: {number} <span>{number <= 7 ? "😗" : "😡"}</span>
      </div>
      <button onClick={AddNum}>+1 증가</button>
      <button onClick={MinusNum}>-2 감소</button>
    </div>
  );
}
export function PracticeState2({ objArr }) {
  //배열을 받아서 순서대로 변경
  const [member, setMember] = useState(objArr[0]);
  let indexNum;
  function changeMember() {
    indexNum = objArr.indexOf(member);
    if (indexNum < objArr.length - 1) {
      indexNum = objArr.indexOf(member) + 1;
    } else {
      indexNum = 0;
    }
    setMember(objArr[indexNum]);
  }
  return (
    <div>
      <div>이름: {member.name}</div>
      <div>나이: {member.age}</div>
      <div>별명: {member.nickname}</div>
      <button onClick={changeMember}>멤버 바꾸기</button>
    </div>
  );
}
