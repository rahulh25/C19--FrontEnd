import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { withAlert } from "react-alert";
import "./forgotpassword.component.css";
import { validateEmail } from "../utils";
import axios from "axios";
import * as Constants from "../constants";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        newPassword: "",
        temporaryPassword: "",
      },
      isEmailAddress: true,
      isEmailAlreadyExists: false,
    };
  }
  updateEmail = (e) => {
    this.setState({ form: { ...this.state.form, email: e.target.value } });
  };
  checkEmail = (event) => {
    validateEmail(event.target.value).then((result) => {
      console.log(result);
      this.setState(result);
    });
  };
  updatePasswordForm = (event) => {
    event.preventDefault();
    this.setState({
      form: { ...this.state.form, newPassword: event.target.value },
    });
  };
  updateTempPassword = (event) => {
    event.preventDefault();
    this.setState({
      form: { ...this.state.form, temporaryPassword: event.target.value },
    });
  };
  resetPassword = (event) => {
    event.preventDefault(); 
    const { alert } = this.props;
    const { form } = this.state;
    console.log(form);
    axios
      .post(Constants.PASSWORD_RESET, form)
      .then((res) => {
        alert.show(
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">{res.data.message}</h4>
            <a href="/login">Sign In</a> with new password!
          </div>,
          { type: "success" }
        );
      })
      .catch((err) => {
        console.log(`Error while password reset ${err}`);
        alert.show(
          <div class="alert alert-danger" role="alert">
            {err.response.data.message} {err.message}
          </div>,
          { type: "error" }
        );
      });
  };
  sendResetRequest = (event) => {
    const { alert } = this.props;
    event.preventDefault();
    window.scroll(0, 0);
    const { form } = this.state;
    var postObj = {
      email: form["email"],
    };
    axios
      .post(Constants.PASSWORD_RESET_REQUEST, postObj)
      .then((res) => {
        alert.show(
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">{res.data.message}</h4>
            <p>
              A temporary password has been sent to your email to reset your
              password!
            </p>
          </div>,
          { type: "success" }
        );
      })
      .catch((err) => {
        console.log(`Error while password reset request ${err}`);
        alert.show(
          <div class="alert alert-danger" role="alert">
            {err.response.data.message} {err.message}
          </div>,
          { type: "error" }
        );
      });
  };
  validateConfirmPassword = (event) => {
    event.preventDefault();
    const { alert } = this.props;
    const { form } = this.state;
    console.log(form);
    if (form["newPassword"] === event.target.value) {
      alert.show("Passwords match!", { type: "success", timeout: 5000 });
    } else {
      alert.show("Passwords do not match!", { type: "error", timeout: 5000 });
    }
  };
  render() {
    const { isEmailAddress, isEmailAlreadyExists } = this.state;

    return (
      <div class="container">
        <div class="row">
          <div class="row cardRow">
            <div class="col-md-12 col-md-offset-12">
              <div class="panel panel-default">
                <div class="panel-body">
                  <div class="text-center">
                    <h3>
                      <i class="fa fa-lock fa-4x"></i>
                    </h3>
                    <h2 class="text-center">Forgot Password?</h2>
                    <p>You can reset your password here.</p>
                    <div class="panel-body">
                      <form class="form">
                        <fieldset>
                          <div class="form-group">
                            <div class="input-group">
                              <span class="input-group-addon">
                                <i class="glyphicon glyphicon-envelope color-blue"></i>
                              </span>
                              <label className="labelStyle">
                                Email <span className="requiredColor">*</span>
                              </label>
                              <input
                                required
                                type="text"
                                className="form-control emailInput"
                                name="email"
                                placeholder="Email"
                                onBlur={this.checkEmail}
                                onChange={this.updateEmail}
                              />
                            </div>
                            {!isEmailAddress && (
                              <Alert severity="error">
                                Please enter a valid email address!
                              </Alert>
                            )}
                            {!isEmailAlreadyExists && (
                              <Alert severity="error">
                                Email address does not exists! Please{" "}
                                <Link to="/register">Sign up</Link>
                              </Alert>
                            )}
                          </div>
                          <div className="container-requestBtn">
                            <button
                              className="requestBtn"
                              onClick={this.sendResetRequest}
                            >
                              Request reset
                            </button>
                          </div>
                          <div class="form-group">
                            <div class="input-group">
                              {" "}
                              <label className="labelStyle">
                                Password{" "}
                                <span className="requiredColor">*</span>
                              </label>
                              <input
                                type="password"
                                required
                                className="form-control"
                                placeholder="Password"
                                onChange={this.updatePasswordForm}
                              />
                            </div>
                          </div>

                          <div class="form-group">
                            <div class="input-group">
                              {" "}
                              <label className="labelStyle">
                                Confirm Password{" "}
                                <span className="requiredColor">*</span>
                              </label>
                              <input
                                required
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                onBlur={this.validateConfirmPassword}
                              />
                            </div>
                          </div>

                          <div class="form-group">
                            <div class="input-group">
                              {" "}
                              <label className="labelStyle">
                                Temporary Password{" "}
                                <span className="requiredColor">*</span>
                              </label>
                              <input
                                type="password"
                                required
                                className="form-control"
                                placeholder="Temporary Password"
                                onChange={this.updateTempPassword}
                              />
                            </div>
                          </div>
                          <div className="container-resetPasswordBtn">
                            <button
                              className="resetPasswordBtn"
                              onClick={this.resetPassword}
                            >
                              Reset Password
                            </button>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withAlert()(withRouter(ForgotPassword));
