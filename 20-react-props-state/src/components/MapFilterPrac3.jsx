import { useState } from "react";

export default function MapFilterPrac3() {
  // state
  const [list, setList] = useState([]);
  const [searchList, setSearchList] = useState(list);
  const [searchOk, setSearchOk] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputSelect, setInputSelect] = useState("name");

  //글 추가하는 함수
  const insertList = () => {
    if (inputName.trim().length === 0 || inputTitle.trim().length === 0) {
      return alert("이름과 제목 모두 작성해주세요!!");
    }
    const newList = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      name: inputName,
      title: inputTitle,
    });
    setList(newList);
    setInputName("");
    setInputTitle("");
  };
  //enter추가함수
  const enterInsert = (e) => {
    if (e.key === "Enter") {
      insertList();
    }
  };
  //검색결과를 가지고 오는 함수
  const getSearchList = () => {
    if (inputSelect === "name") {
      //작성자검색
      const newList = list.filter((user) => user.name.includes(inputText));
      setSearchList(newList);
    } else {
      //제목검색
      const newList = list.filter((user) => user.title.includes(inputText));
      setSearchList(newList);
    }

    setSearchOk(true);
  };

  //전체결과를 가지고 오는 함수
  const getTotalList = () => {
    setSearchList(list);
    setSearchOk(true);
  };
  //   =================================================================
  return (
    <div>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        작성자:
        <input
          type="text"
          style={{ margin: "10px" }}
          placeholder="작성자"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        제목:
        <input
          type="text"
          style={{ margin: "10px" }}
          placeholder="제목"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          onKeyDown={enterInsert}
        />
        <button onClick={insertList}>작성</button>
      </div>
      <br />
      <div>
        <select
          style={{ marginRight: "10px" }}
          onChange={(e) => setInputSelect(e.target.value)}
        >
          <option value="name">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          style={{ marginRight: "10px" }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={getSearchList}>검색</button>
        <button onClick={getTotalList}>전체</button>
      </div>
      <br />
      <div>
        <table style={{ borderCollapse: "collapse" }}>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
          {list.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.name}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div>
        {/* 기본적으로 보이지 않는 상태였다가 검색버튼이 클릭되면 보여야함 */}
        {searchOk ? (
          <table style={{ borderCollapse: "collapse" }}>
            <h4>검색결과</h4>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
            {searchList.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.name}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          "검색 결과가 없습니다"
        )}
      </div>
    </div>
  );
}
