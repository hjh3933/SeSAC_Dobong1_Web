import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h2>page not found</h2>
      <Link to="/">Home</Link>
    </>
  );
}
