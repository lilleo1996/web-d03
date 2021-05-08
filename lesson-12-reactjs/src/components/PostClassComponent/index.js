import React from 'react'

import './style.css'

class PostClassComponent extends React.Component {
  handleClick = () => {
     
  }

  render() {
    const { id, author, content, isClicked } = this.props.postInfo
    return (
      <div className="post">
        <p className="post__author">{author}</p>
        <p className="post__content">{content}</p>
      </div>
    )
  }
}

export default PostClassComponent