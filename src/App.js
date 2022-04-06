import "./index.css";
import SideBar from "./components/SideBar";
import Channelbar from "./components/ChannelBar";
import ContentContainer from "./components/ContentContainer";
import { useState, useEffect } from "react";

function App() {
  const server = "http://localhost:3500/posts";

  const [posts, setPosts] = useState([]);

  // Alpha numeric string
  const alphaNum =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Generate unique UUID mimic
  const randomString = (length, alphaNum) => {
    var result = "";
    for (var i = length; i > 0; --i)
      result += alphaNum[Math.floor(Math.random() * alphaNum.length)];
    return result;
  };

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      setPosts(postsFromServer);
    };

    getPosts();
  }, []);

  // Fetch posts from mock server
  const fetchPosts = async () => {
    const res = await fetch(server);
    const data = await res.json();
    return data;
  };

  // Add new post
  const addPost = async (post) => {
    // Generate custom UUID
    const id =
      randomString(8, alphaNum) +
      "-" +
      randomString(4, alphaNum) +
      "-" +
      randomString(4, alphaNum) +
      "-" +
      randomString(12, alphaNum);

    // Default authoer name
    const name = "Anonymous User";

    // Get current date
    const timestamp = currentDate();

    // Append constants beofre post
    const newPost = { id, name, timestamp, ...post };

    // Create post request to db.json
    const res = await fetch(server, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    const data = await res.json();
    setPosts([...posts, data]);
  };

  const currentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    // return mm + "/" + dd + "/" + yyyy;
    // return mm + "-" + dd + "-" + yyyy;
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <div className="flex">
      <SideBar />
      <Channelbar />
      <ContentContainer posts={posts} onAdd={addPost} />
    </div>
  );
}

export default App;
