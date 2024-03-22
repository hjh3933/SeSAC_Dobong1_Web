export default function PostItem({ post }) {
  return (
    <div key={post.id}>
      <div>
        <span>No. {post.id}</span>
        <div>- {post.title}</div>
      </div>
      <p>{post.body}</p>
    </div>
  );
}
