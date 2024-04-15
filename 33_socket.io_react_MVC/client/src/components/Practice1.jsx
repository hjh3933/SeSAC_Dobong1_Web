import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:8080", { autoConnect: false });

export default function Practice1() {
  const [fromServer, setFromServer] = useState("");
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  useEffect(() => {
    initSocketConnect();
  }, []);

  function helloEvent() {
    socket.emit("hello", "안녕하세요", (res) => {
      //   console.log(res); //server :: 안녕하세요
      setFromServer(res);
    });
  }
  function studyEvent() {
    socket.emit("study", "공부합시다!", (res) => {
      setFromServer(res);
    });
  }
  function byeEvent() {
    socket.emit("bye", "안녕히가세요", (res) => {
      setFromServer(res);
    });
  }

  return (
    <>
      <button onClick={helloEvent}>hello</button>
      <button onClick={studyEvent}>study</button>
      <button onClick={byeEvent}>bye</button>
      <h3>{fromServer}</h3>
    </>
  );
}
