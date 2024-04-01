import Button from "./Button";

export default function OrangeButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#fae243"
      subColor="#ed8249"
      hoverColor="#faf000"
    />
  );
}
