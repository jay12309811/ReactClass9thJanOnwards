import React, { Component } from "react";
import "./App.css";
import Test from "./Test";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0, // state
      arrayList: [
        { name: "A", age: 12 },
        { name: "B", age: 12 },
        { name: "C", age: 12 },
        { name: "D", age: 12 },
        { name: "E", age: 12 },
      ],
    };
    console.log("Initial in constructor");
  }
  componentDidMount() {
    console.log("Component mounted to DOM!");
  }
  increment = () => {
    console.log("Updating state");
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  shouldComponentUpdate() {
    console.log("Inside should update");
    return true;
  }
  componentDidUpdate() {
    console.log("Component updated!");
  }
  componentWillUnmount() {
    console.log("Component going to unmount from DOM");
  }
  render() {
    console.log("I am rerendering");

    return (
      <div className="App">
        <div>
          <h1>
            Counter value <CounterValue counter={this.state.counter} />
          </h1>
        </div>
        <div>
          <button onClick={this.increment}>Click to increment</button>
          <h3>OR</h3>
          <button onClick={this.decrement}>Click to decrement</button>
        </div>
        {this.state.counter < 3 ? <Test /> : ""}
      </div>
    );
  }
}

function CounterValue(props) {
  return <div>{props.counter}</div>;
}
