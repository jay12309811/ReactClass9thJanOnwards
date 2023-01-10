import React, { Component } from "react";
import PureComponent1 from "./PureComponent1";
import PureComponent2 from "./PureComponent2";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueForComponent1: "",
      valueForComponent2: "",
    };
  }
  changeInput1 = (event) => {
    this.setState({ valueForComponent1: event.target.value });
  };
  changeInput2 = (event) => {
    this.setState({ valueForComponent2: event.target.value });
  };
  render() {
    return (
      <div style={{ marginLeft: "30%" }}>
        <h3>
          Pass a value to PureComponent1{" "}
          <input type={"text"} onBlur={this.changeInput1} />
        </h3>
        <PureComponent1 value={this.state.valueForComponent1} />
        <h3>
          Pass a value to PureComponent2{" "}
          <input type={"text"} onBlur={this.changeInput2} />
        </h3>
        <PureComponent2 value={this.state.valueForComponent2} />
      </div>
    );
  }
}
