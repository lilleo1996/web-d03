import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import './style.css'
import UserFunctionalComponent from '../../components/UserFunctionalComponent'
import UserClassComponent from '../../components/UserClassComponent'
import CounterClassComponent from '../../components/CounterClassComponent'
import ClockClassComponent from '../../components/ClockClassComponent'
import PostClassComponent from '../../components/PostClassComponent'

const postList = [
  {
    id: uuidv4(),
    author: 'Giang',
    content: 'Sao cũng đc :v ~~',
    isClicked: false
  },
  {
    id: uuidv4(),
    author: 'Khải',
    content: 'Vẻ bề ngoài quan trọng thế à, còn ví anh thì sao... dỗi',
    isClicked: false
  },
  {
    id: uuidv4(),
    author: 'Tiên Tiên',
    content: 'Hôm nay ăn mì',
    isClicked: false
  },
]

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: postList
    }
  }

  render() {
    return (
      <div className="home-page">
        <UserFunctionalComponent name='Hieu' age={18} gender='Male'/>
        <UserClassComponent name='Hieu' age={19} gender='Female'/>
        <CounterClassComponent />
        <ClockClassComponent />
        {this.state.posts.map(post => <PostClassComponent postInfo={post}/>)}
      </div>
    )
  }
}

export default HomePage 