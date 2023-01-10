import React, { Component } from "react";

export default class Test extends Component {
  componentWillUnmount() {
    console.log("I am being removed !!");
  }
  render() {
    return <div>Test</div>;
  }
}
