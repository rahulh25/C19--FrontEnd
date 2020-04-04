import React from "react";
import Stats from "./Stats";
import Alert from "@material-ui/lab/Alert";

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailAddress: true,
      isPasswordMatch: null,
    };
  }
  render() {
    const { isPasswordMatch, isEmailAddress } = this.state;
    const validate = () => {
      this.props.previousStep();
    };
    const validateEmail = (e) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let emailValidate = re.test(String(e.target.value).toLowerCase());
      this.setState({
        isEmailAddress: emailValidate,
      });
    };
    const updateEmailInForm = (e) => {
      this.props.update("email", e.target.value);
    };
    const updatePasswordForm = (e) => {
      this.props.update("password", e.target.value);
    };
    const updateCOnfirmpasswordForm=(e)=>{
      this.props.update("confirmpassword", e.target.value);   
    }
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
        <label>
          Email <span className="requiredColor">*</span>
        </label>
        <input
          required
          type="text"
          className="form-control"
          name="email"
          placeholder="Email"
          onBlur={validateEmail}
          onChange={updateEmailInForm}
        />
        <div className="text-muted">
          We'll never share your email with anyone else.
        </div>
        {!isEmailAddress && (
          <Alert severity="error">Please enter a valid email address!</Alert>
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
        <Stats step={2} {...this.props} previousStep={validate} />
      </div>
    );
  }
}
export default Second;
