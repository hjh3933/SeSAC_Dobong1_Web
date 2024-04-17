import io from "socket.io-client";
import Notice from "./Notice";
import Speech from "./Speech";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:8080", { autoConnect: false });
export default function Chatting2() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([
    {
      type: "me", //me, other, notice
      content: "내가 작성한 메세지",
    },
    {
      type: "other",
      content: "다른사람이 작성한 메세지",
    },
    // {
    //   type: "notice",
    //   content: "~~님이 입장하셨습니다",
    // },
  ]);

  const [nicknameInput, setNicknameInput] = useState(""); //닉네임 input창
  const [nickname, setNickname] = useState(null); // 내 닉네임을 관리하는 state

  useEffect(() => {
    socket.on("notice", (notice) => {
      const newChatList = [
        ...chatList,
        {
          type: "notice",
          content: notice,
        },
      ];
      setChatList(newChatList);
    });
  }, [chatList]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const join = () => {
    if (nicknameInput.trim() === "") {
      alert("이름을 입력해주세요!!");
    } else {
      initSocketConnect();
      //닉네임 사용1: 중복체크를 위해 서버로 닉네임 전송
      socket.emit("checkNick", nicknameInput);
    }
  };
  useEffect(() => {
    //닉네임 사용3: 입장실패
    socket.on("error", (errMsg) => {
      alert(errMsg);
    });
    //닉네임 사용3: 입장성공 - 내 닉네임 전달받아 state에 저장
    socket.on("entrySuccess", (nick) => {
      setNickname(nick);
    });
  }, []);
  const enterEvent = (e) => {
    // console.log(e.key);
    if (e.key === "Enter") join();
  };
  return (
    <>
      <ul>
        <li>닉네임 받고, 중복체크</li>
        <li>퇴장공고</li>
      </ul>
      {/* nickname이 null이면 입력창,
      nickname이 있으면 채팅창
    */}
      {!nickname ? (
        <div className="entry-box">
          <input
            type="text"
            placeholder="닉네임 입력"
            onChange={(e) => setNicknameInput(e.target.value)}
            value={nicknameInput}
            onKeyDown={enterEvent}
          />
          <button onClick={join}>채팅방입장하기</button>
        </div>
      ) : (
        <div className="container">
          <header>코코아톡🐛-{nickname}</header>
          <section>
            {chatList.map((chat, i) =>
              chat.type === "notice" ? (
                <Notice chat={chat} key={i} />
              ) : (
                <Speech chat={chat} key={i} />
              )
            )}
          </section>
          <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
            <select id="dm-select">
              <option value="all">전체</option>
            </select>
            <input
              type="text"
              placeholder="메세지 입력"
              onChange={(e) => setMsgInput(e.target.value)}
              value={msgInput}
            />

            <button>전송</button>
          </form>
        </div>
      )}
    </>
  );
}
