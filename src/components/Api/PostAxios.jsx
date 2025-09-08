import React, { useState } from "react";

function PostAxios() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = (event)=>{
    event.preventDefault();
    const newPost ={

        title,
        body,
    };
    axios.post("https://jsonplaceholder.typicode.com//posts", newPost)
    .then((response)=>{
        setResponseMessage("Post created successfully!")
    })
    .catch((err)=>{ 
        setResponseMessage("Error creating post")
    });
    
  }

  return (
    <>
      <h2>Create new Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
       {responseMessage && <p>{responseMessage}</p>}
    </>
  );
}

export default PostAxios;
