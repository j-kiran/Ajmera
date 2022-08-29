import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("https://gorest.co.in/public/v2/posts");
      setPosts(data);
    };

    fetch();
  }, []);

  const handlePost = (id) => {
    const findPost = posts.find((pos) => pos.id == id);
    setItem(findPost);
  };

  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <>
      <div class="container">
        <div class="nav">Posts</div>
        <div class="sidebar">
          {posts.map((item) => (
            <div onClick={() => handlePost(item.id)}>
              <div className="post">
                <h4>Title</h4>

                <div
                  style={{
                    fontWeight: "400",
                    fontSize: 16,
                  }}
                >
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="main">
          {item ? (
            <div class="content">
              <p
                style={{
                  fontWeight: "900",
                  fontSize: 22,
                }}
              >
                {item.title}
              </p>
              <p>{item.body}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
