import React from "react";
import "./login.component.css";
import axios from "axios";
import * as Constants from "../constants";
import { withRouter } from "react-router";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      error: false,
      errorMessage: "",
    };
  }
  handleEmail = (e) => {
    const { form } = this.state;
    form["email"] = e.target.value;
    this.setState({
      form,
    });
  };
  handlePassword = (e) => {
    const { form } = this.state;
    form["password"] = e.target.value;
    this.setState({
      form,
    });
  };
  handleSignIn = (e) => {
    e.preventDefault();
    const { form } = this.state;
    console.log(form);
    axios
      .post(Constants.SIGNIN_USER_API, form)
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message.hasOwnProperty("token")) {
          console.log(res.data.message);
          this.props.history.push("/dashboard", res.data.message);
        } else {
          ////invalid password
          this.setState({
            error: true,
            errorMessage: res.data.message,
          });
        }
      })
      .catch((err) => {
        console.log(
          `Error while sign in ${err.message},${err.response.data.message}`
        );
        let message = `${err.response.data.message},
                     ${err.message}`;
        this.setState({
          error: true,
          errorMessage: message,
        });
      });
  };
  render() {
    const { error, errorMessage } = this.state;
    return (
      <div className="loginContainer">
        {error && (
          <div class="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <form onSubmit={this.handleSignIn}>
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={this.handleEmail}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={this.handlePassword}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-success btn-block">
            Sign In
          </button>
          <p className="forgot-password text-right">
            <a href="#">Forgot password?</a>
          </p>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
