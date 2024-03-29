import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Box() {
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <>
      <div>{context}</div>
    </>
  );
}
