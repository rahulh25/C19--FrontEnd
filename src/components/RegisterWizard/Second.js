import React from "react";
import Stats from "./Stats";
import Alert from "@material-ui/lab/Alert";
import { validateEmail } from "../../utils";

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      isEmailAddress: true,
      isPasswordMatch: null,
      isEmailAlreadyExists: false,
    };
  }
  render() {
    const {
      isPasswordMatch,
      isEmailAddress,
      isEmailAlreadyExists,
      errorMessage,
    } = this.state;
    const validate = () => {
      this.props.previousStep();
    };
    const checkEmail = (event) => {
      validateEmail(event.target.value).then((result) => {
        console.log(result);
        this.setState(result);
      });
    };
    const updateEmailInForm = (e) => {
      this.props.update("email", e.target.value);
    };
    const updatePasswordForm = (e) => {
      this.props.update("password", e.target.value);
    };
    const updateCOnfirmpasswordForm = (e) => {
      this.props.update("confirmpassword", e.target.value);
    };
    const validateConfirmPassword = (e) => {
      const { form } = this.props;
      console.log(form);
      if (form["password"] === e.target.value) {
        this.setState({
          isPasswordMatch: true,
        });
      } else {
        this.setState({
          isPasswordMatch: false,
        });
      }
    };
    return (
      <div>
        {errorMessage == null ? (
          <div>
            {" "}
            <label>
              Email <span className="requiredColor">*</span>
            </label>
            <input
              required
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
              onBlur={checkEmail}
              onChange={updateEmailInForm}
            />
            <div className="text-muted">
              <a
                href="https://www.northeastern.edu/privacy-information/"
                target="_blank"
              >
                Please see our privacy policy
              </a>
            </div>
            {!isEmailAddress && (
              <Alert severity="error">
                Please enter a valid email address!
              </Alert>
            )}
            {isEmailAlreadyExists && (
              <Alert severity="error">Email address already exists!</Alert>
            )}
            <label>
              Password <span className="requiredColor">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              onChange={updatePasswordForm}
            />
            <label>
              Confirm Password <span className="requiredColor">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Confirm Password"
              onBlur={validateConfirmPassword}
              onChange={updateCOnfirmpasswordForm}
            />
            {isPasswordMatch != null &&
              (isPasswordMatch ? (
                <Alert severity="success">Passwords match!</Alert>
              ) : (
                <Alert severity="error">Passwords do not match!</Alert>
              ))}
            <Stats
              step={2}
              isEmailAddress={isEmailAddress}
              isEmailAlreadyExists={isEmailAlreadyExists}
              {...this.props}
              previousStep={validate}
            />{" "}
          </div>
        ) : (
          <div class="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
}
export default Second;
