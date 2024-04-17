export default function Speech({ chat }) {
  // chat - type me or other
  return (
    <div className={`speech ${chat.type} ${chat.isDm ? "dm" : ""}`}>
      {chat.type === "other" && <span className="nickname">{chat.name}</span>}
      <span className="msg-box">{chat.content}</span>
    </div>
  );
}
