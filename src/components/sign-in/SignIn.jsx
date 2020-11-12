import React, { Component } from "react";
import FormInput from "../input-forms/FormInput";
import "./SignIn.scss";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    event.preventDefault();

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <h2>I already have a account</h2>
        <span>Sign in with Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;
