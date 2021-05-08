import React from 'react'

class ClockClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>Bây giờ là: {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default ClockClassComponent