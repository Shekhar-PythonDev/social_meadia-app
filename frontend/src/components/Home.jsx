import { useEffect, useState } from "react";
import axios from "axios";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/posts/")
      .then(res => setPosts(res.data));
  }, []);

  return (
    <>
      <h2>Home</h2>
      <CreatePost />
      {posts.map(p => <Post key={p.id} post={p} />)}
    </>
  );
}
export default Home;