import { useState } from "react";

export default function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);
  const [inputAlpha, setInputAlpha] = useState("");
  const addAlpha = () => {
    if (inputAlpha.trim().length === 0) return;
    const newAlpha = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      alpha: inputAlpha,
    });
    setList(newAlpha);
    setInputAlpha("");
  };
  const activeEnter = (e) => {
    console.log(e.key); //value, enter 등 키보드 정보가 나옴
    if (e.key === "Enter") {
      addAlpha();
    }
  };
  const deleteAlpha = (id) => {
    // console.log("id>>", id); //아이디 확인
    // 클릭된 아이디와 다른 아이디를 가지는 alpha만으로 구성된 배열을 만든다
    const newAlpha = list.filter((alpha) => alpha.id !== id);
    setList(newAlpha);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="추가할 알파벳을 적으세요"
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        value={inputAlpha}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={addAlpha}>add Alphabet</button>
      <ol>
        {list.map((alphabet) => (
          //{중괄호가 있으면 return적어야하고, 없이 곧바로 ()괄호에 적으면 return적지 않아도 된다}
          <li onDoubleClick={() => deleteAlpha(alphabet.id)} key={alphabet.id}>
            {alphabet.alpha}
          </li>
        ))}
      </ol>
    </div>
  );
}
