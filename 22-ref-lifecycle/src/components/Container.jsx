import "../components/styles/post.css";
export default function Container({ children }) {
  return (
    <>
      <header className="header">POST LIST📖</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
