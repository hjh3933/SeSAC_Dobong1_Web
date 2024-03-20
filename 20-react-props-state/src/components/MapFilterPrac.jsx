import { useState } from "react";

export default function MapFilterPrac() {
  const [list, setList] = useState([
    { id: 1, name: "코디", email: "code@gmail.com" },
    { id: 2, name: "juhee", email: "hkh3933@naver.com" },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const addList = () => {
    if (inputName.trim().length === 0 || inputEmail.trim().length === 0) {
      return alert("이메일과 이름 모두 작성해주세요!!");
    }
    const newList = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      name: inputName,
      email: inputEmail,
    });
    setList(newList);
    setInputName("");
    setInputEmail("");
  };
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      addList();
    }
  };
  const deleteData = (id) => {
    const newList = list.filter((data) => data.id !== id);
    setList(newList);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름"
          onChange={(e) => setInputName(e.target.value)}
          value={inputName}
        />
        <input
          type="email"
          placeholder="이메일"
          onChange={(e) => setInputEmail(e.target.value)}
          value={inputEmail}
          onKeyDown={(e) => activeEnter(e)}
        />
        <button onClick={addList}>등록</button>
      </div>
      <div>
        {list.map((data) => {
          return (
            <h3 key={data.id} onDoubleClick={() => deleteData(data.id)}>
              {data.name}: {data.email}
            </h3>
          );
        })}
      </div>
    </div>
  );
}
