import React from "react";

import "./style.css";
import UserFunctionalComponent from "../../components/UserFunctionalComponent";
import UserClassComponent from "../../components/UserClassComponent";
import CounterClassComponent from "../../components/CounterClassComponent";
import ClockClassComponent from "../../components/ClockClassComponent";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page">
        <UserFunctionalComponent name="Hieu" age={18} gender="Male" />
        <UserClassComponent name="Hieu" age={19} gender="Female" />
        <CounterClassComponent />
        <ClockClassComponent />
      </div>
    );
  }
}

export default Home;
