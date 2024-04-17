import io from "socket.io-client";
import Notice from "./Notice";
import Speech from "./Speech";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const socket = io.connect("http://localhost:8080", { autoConnect: false });
export default function Chatting3() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  const scrollDiv = useRef(null);
  const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([]);
  const [nicknameInput, setNicknameInput] = useState(""); //닉네임 input창
  const [nickname, setNickname] = useState(null); // 내 닉네임을 관리하는 state
  const [userList, setUserList] = useState({}); //전체 클라이언트 닉네임 정보 관리
  const [dmTo, setDmTo] = useState("all"); //dm관련 state

  useEffect(() => {
    //알림문구
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

    scrollDiv.current?.scrollIntoView({ behavior: "auto" }); //smooth
  }, [chatList]);

  //대화문구
  const addChatList = useCallback(
    (data) => {
      // console.log(data); //{id, message, isDm?}
      const type = data.id === nickname ? "me" : "other";
      const content = `${data.isDm ? "[DM]" : ""} ${data.message}`;
      const isDm = data.isDm;
      const newChatList = [
        ...chatList,
        {
          type: type,
          content: content,
          isDm: isDm,
          name: data.id,
        },
      ];
      setChatList(newChatList);
    },
    [nickname, chatList]
  );

  useEffect(() => {
    socket.on("message", addChatList);
  }, [addChatList]);

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
    //nickname정보 받아서 저장
    socket.on("updateNicks", (nickInfo) => {
      setUserList(nickInfo);
    });
  }, []);

  const enterEvent = (e) => {
    if (e.key === "Enter") join();
  };
  const userOption = useMemo(() => {
    const options = [];
    for (let key in userList) {
      if (key !== socket.id)
        options.push(<option value={key}>{userList[key]}</option>);
    }

    return options;
  }, [userList]);

  //메시지전송
  const handleSubmit = (e) => {
    e.preventDefault();
    if (msgInput.trim() === "") return setMsgInput("");

    const sendData = {
      dm: dmTo, // all or socket.id
      msg: msgInput,
      myNick: nickname,
    };
    socket.emit("send", sendData);

    setMsgInput("");
  };

  return (
    <>
      <ul>
        <li>메세지 보내기</li>
        <li>dm보내기</li>
      </ul>
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
            <div ref={scrollDiv}></div>
          </section>
          <form className="msg-form" id="msg-form" onSubmit={handleSubmit}>
            <select id="dm-select" onChange={(e) => setDmTo(e.target.value)}>
              <option value="all">전체</option>
              {userOption}
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
