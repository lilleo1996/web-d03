import React from 'react'

import './style.css'

class UserClassComponent extends React.Component {
  render() {
    const { name, age, gender } = this.props

    return (
      <div className="func-component">
        <p className="func-component__name">Name: {name}</p>
        <p className="func-component__age">Age: {age}</p>
        <p className="func-component__gender">Gender: {gender}</p>
      </div>
    )

  }
}

export default UserClassComponent