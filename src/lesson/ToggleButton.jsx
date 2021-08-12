import React from "react";

class ToggleButton extends React.Component {
  state = {
    isToggleOn: true,
  };
  btnHandler = () => {
    this.setState({ isToggleOn: this.state.isToggleOn ? false : true });
  };
  render() {
    return (
      <div>
        <button onClick={this.btnHandler}>
          {this.state.isToggleOn ? "on" : "off"}
        </button>
      </div>
    );
  }
}

export default ToggleButton;
