import { useState } from "react";
import axios from "axios";

function CreatePost() {
  const [post, setPost] = useState({ title: "", body: "" });

  const submit = () => {
    axios.post("http://127.0.0.1:8000/api/posts/", post)
      .then(() => {
        alert("Post created");
        setPost({ title: "", body: "" });
      })
      .catch(err => {
        alert(err?.response?.data || "Error creating post");
      });
  };

  return (
    <div>
      <h2>Create Post</h2>
      <input
        placeholder="Title"
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
      />
      <textarea
        placeholder="Body"
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default CreatePost;