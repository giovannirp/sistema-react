import React, { Component } from "react";

class BtnWordDay extends Component {
  render() {
    return (
      <div>
        <button className={this.props.style} onClick={this.props.actionBtn}>{this.props.name}</button>
      </div>
    );
  }
}

export default BtnWordDay;
