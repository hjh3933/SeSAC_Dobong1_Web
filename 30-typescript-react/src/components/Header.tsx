import { Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/lecture"}>Lecture</Link>
      <Link to={"/practice"}>Practice</Link>
    </>
  );
}
