import React, { Component } from "react";
import ButtonLogout from "./ButtonLogout";
import ButtonLogin from "./ButtonLogin";
import Greeting from "./Greeting";

export default class LoginControl extends Component {
  state = {
    isLoggedIn: this.props.isLogin,
  };

  btnLoginHandler = () => {
    this.setState({ isLoggedIn: true });
  };

  btnLogoutHandler = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let Button;
    if (this.state.isLoggedIn) {
      Button = <ButtonLogout onClick={this.btnLogoutHandler} />;
    } else {
      Button = <ButtonLogin onClick={this.btnLoginHandler} />;
    }
    return (
      <div>
        <Greeting isLogin={this.state.isLoggedIn} />
        {this.props.haveMassage && <h2>You have a massage</h2>}
        {Button}

        {/* atau */}
        {/* {this.state.isLoggedIn ? (
          <ButtonLogout onClick={this.btnLogoutHandler} />
        ) : (
          <ButtonLogin onClick={this.btnLoginHandler} />
        )} */}
      </div>
    );
  }
}
