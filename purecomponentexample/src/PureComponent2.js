import React, { PureComponent } from "react";

export default class PureComponent2 extends PureComponent {
  constructor(props) {
    super(props);
    this.renderCount = React.createRef(0);
    // Ref is not a state, so updating this will not trigger rerender
  }
  render() {
    this.renderCount.current++;
    return (
      <div>PureComponent2 rendered {this.renderCount.current} times !!</div>
    );
  }
}
