import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

class ParentComponent extends Component {
  render() {
    console.log("I received some props : ", this.props);
    return (
      <div>
        ParentComponent received props as - {JSON.stringify(this.props)}
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  return store; //{ value: store.storeValue2 };
};
export default compose(connect(mapStateToProps))(ParentComponent);
