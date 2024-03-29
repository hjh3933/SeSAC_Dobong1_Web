import { useContext, useRef } from "react";
import { UserContext } from "../context/UserContext";
import { AgeContext } from "../context/AgeContext";

export default function Profile() {
  const { name, setName } = useContext(UserContext);
  const { age, setAge } = useContext(AgeContext);

  const nameRef = useRef();
  const ageRef = useRef();

  const changeInfo = () => {
    setName(nameRef.current.value);
    setAge(ageRef.current.value);
  };
  return (
    <div>
      <h3>사용자 profile</h3>
      <p>이름: {name}</p>
      <p>나이: {age}</p>

      <input type="text" placeholder="이름입력" ref={nameRef} />
      <input type="number" placeholder="나이입력" ref={ageRef} />
      <br />
      <button onClick={changeInfo}>바꾸기</button>
    </div>
  );
}
