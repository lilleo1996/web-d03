import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import "./style.css";
import { postList } from "../../data/PostData"
import PostClassComponent from "../../components/PostClassComponent";

const Posts = () => {
  let history = useHistory();
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // call API
    setPosts(postList)
  });

  const handleClickPost = (postId) => {
    // const newPosts = posts.map((post) => {
    //   if (post.id === postId) return { ...post, isClicked: !post.isClicked };
    //   return post;
    // });
    // setPosts(newPosts)
    history.push({pathname: `/:${postId}`})
  };

  return (
    <div className="posts">
      {posts.map((post) => (
        <PostClassComponent
          key={post.id}
          postInfo={post}
          onClickPost={handleClickPost}
        />
      ))}
    </div>
  )
}

export default Posts;
