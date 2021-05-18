import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import "./style.css";
import { postList } from "../../data/PostData"
import PostClassComponent from "../../components/PostClassComponent";

const PostDetail = () => {
  const [post, setPost] = useState({})

  useEffect(() => {
    // call API
    
  });

  handleClickPost = (postId) => {
    const newPosts = this.state.posts.map((post) => {
      if (post.id === postId) return { ...post, isClicked: !post.isClicked };
      return post;
    });

    this.setState({ posts: newPosts });
  };

  render() {
    return (
      <div className="posts">
        {this.state.posts.map((post) => (
          <PostClassComponent
            key={post.id}
            postInfo={post}
            onClickPost={this.handleClickPost}
          />
        ))}
      </div>
    );
  }
}

export default PostDetail;
