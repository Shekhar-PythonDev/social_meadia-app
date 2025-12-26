function Post({ post }) {
  return (
    <div>
      <b>{post.username}</b>
      <p>{post.content}</p>
      <button>Like</button>
      <button>Comment</button>
      <button>Share</button>
    </div>
  );
}
export default Post;