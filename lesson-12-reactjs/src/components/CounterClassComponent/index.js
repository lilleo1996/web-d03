import React from 'react'

class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState(state => ({
      count: state.count + 1
    }))

    // this.setState(state => ({
    //   count: state.count + 1
    // }))

    // this.setState({count: this.state.count + 1}) // this.setState({count : 1})

    // this.setState({count: this.state.count + 1}) // this.setState({count : 1})
  }

  render() {
    return (
      <div className="counter">
        <h2>Bạn đã bấm {this.state.count} lần</h2>
        <button onClick={() => this.handleClick()}>
          Bấm đê
        </button>
      </div>
    )
  }
}

export default CounterClassComponent