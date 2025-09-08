import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "../commanapi/UserList";
import PostList from "../commanapi/PostList";
import withApiData from "./withApiData";
import PostForm from "../commanapi/PostForm";

const UserListWithData = withApiData(PostList);
const PostListWithData = withApiData(UserList)
const PostFormListWithData = withApiData(PostForm)

function DataAxios({hide, toggle}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts") 
      .then((response) => {
        setData(response.data);
        // console.log(data, "Data ie here ")
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading ....</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
// console.log(data, "Data ie here API ")


  return (
    <>

    {/* <button className="bg-indigo-400 px-2 py-2 rounded" onClick={toggle}>{hide ? "Show Text" : "Hide Text"}</button> */}
  <PostFormListWithData/>
  <PostListWithData/>
  <UserListWithData/>
      <h1>Posts</h1>
      <ul>
        {data && data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>


    </>
  );
}

export default DataAxios;
