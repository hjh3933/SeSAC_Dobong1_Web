import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  // useEffect는 async await를 제공하지 않아서 이렇게 쓰면 안된다고 합니다
  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log(res.data);
    setTimeout(() => {
      setPosts(res.data.slice(0, 10));
    }, 2000);
  };
  useEffect(() => {
    getPosts();
  }, []);

  //css
  const divStyle = {
    backgroundColor: "#eee",
    marginBottom: "30px",
    padding: "20px",
    borderRadius: "5px",
    maxWidth: "600px",
    marginRight: "auto",
    marginLeft: "auto",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
  };
  const hoverStlye = {
    backgroundColor: "#ccc",
    marginBottom: "30px",
    padding: "20px",
    borderRadius: "5px",
    maxWidth: "600px",
    marginRight: "auto",
    marginLeft: "auto",
    cusur: "pointer",
    scale: "1.2",
    zIndex: "99",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    transitionDuration: "1s",
  };
  const [hoverId, setHoverId] = useState(null);
  const overE = (id) => {
    setHoverId(id);
  };
  const outE = () => {
    setHoverId(null);
  };

  return (
    <>
      <div>
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <div
                key={post.id}
                style={post.id === hoverId ? hoverStlye : divStyle}
                onMouseOver={() => overE(post.id)}
                onMouseOut={outE}
              >
                <div style={{ fontWeight: "bold" }}>No. {post.id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
              </div>
            );
          })
        ) : (
          <h3 style={{ textAlign: "center" }}>Loading...</h3>
        )}
      </div>
    </>
  );
}
