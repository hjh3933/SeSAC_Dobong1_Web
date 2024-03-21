import { useRef, useState } from "react";

export default function PracticeMap2() {
  // state
  const [comment, setComment] = useState([
    { writer: "보아", title: "안녕하세요" },
    { writer: "유진", title: "반가워요!" },
    { writer: "진형", title: "안녕못해" },
  ]);
  const [result, setResult] = useState([]);
  const [inputTitle, setInputTitle] = useState(""); //이름 입력창
  const [inputWriter, setInputWriter] = useState(""); //제목 입력창
  const [inputSearch, setInputSearch] = useState(""); //검색어 입력창
  const [searchType, setSearchType] = useState("writer"); //검색 옵션 선택창
  //ref
  const writerRef = useRef();
  const titleRef = useRef();

  // 함수
  const addComment = () => {
    //값이 입력되지 않았을 때
    if (inputWriter.trim().length === 0) {
      writerRef.current.focus();
      return;
    } else if (inputTitle.trim.length === 0) {
      titleRef.current.focus();
      return;
    }

    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    console.log(...comment);
    setComment([...comment, newComment]);
    setInputWriter("");
    setInputTitle("");
  };

  //검색 타입 설정
  const selectSearchType = (e) => {
    setSearchType(e.target.value);
  };
  //실제 검색
  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      //item[title or writer]
      //   console.log(item[searchType]);
      //   console.log(item[searchType].includes(inputSearch));
      if (!item[searchType].includes(inputSearch)) {
        //검색결과 없을 때
        return null;
      }
      //검색결과에 해당하는 item만 return하여 새로운 배열 searchResult가 만들어졌다
      return item;
    });
    // console.log(searchResult);
    setResult(searchResult);
    setInputSearch("");
  };
  console.log(result);
  //   ======================================================
  return (
    <div>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
          ref={writerRef}
        />
        <label htmlFor="title">제목: </label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
          ref={titleRef}
        />
        <button onClick={addComment} type="button">
          작성
        </button>
      </form>

      <form>
        <select onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>
      {/* 모든데이터 */}
      <table border={1} style={{ margin: "30px auto", width: "400px" }}>
        <thead>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
        </thead>
        <tbody>
          {comment.map((co, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{co.title}</td>
                <td>{co.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 검색결과 */}
      {result.length === 0 ? (
        <h5>검색 결과가 없습니다</h5>
      ) : (
        <table border={1} style={{ margin: "30px auto", width: "400px" }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
