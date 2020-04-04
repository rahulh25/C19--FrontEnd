import React from "react";
import Stats from "./Stats";
import Alert from "@material-ui/lab/Alert";

function validateEmail(email) {}
class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailAddress: true
    };
  }
  render() {
    const validate = () => {
      this.props.previousStep();
    };
    const validateEmail = e => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let emailValidate = re.test(String(e.target.value).toLowerCase());
      this.setState({
        isEmailAddress: emailValidate
      });
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
          //  onChange={emailValidate}
        />
        <div className="text-muted">
          We'll never share your email with anyone else.
        </div>
        {!this.state.isEmailAddress && (
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
        />
        <Stats step={2} {...this.props} previousStep={validate} />
      </div>
    );
  }
}
export default Second;
