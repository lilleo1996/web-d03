import React from 'react'

import './style.css'
import UserFunctionalComponent from '../../components/UserFunctionalComponent'

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <UserFunctionalComponent name='Hieu' age={18} gender='Male'/>
      </div>
    )
  }
}

export default HomePage 