import React, { Component } from "react";
import * as Constants from "../../constants";
import axios from "axios";

class Fourth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationMessage: null,
      errorMessage: null,
      register: false,
    };
  }
  registerUser = () => {
    const { form } = this.props;
    console.log(form);
    axios
      .post(Constants.ADD_USER_API, form)
      .then((res) => {
        this.setState({
          registrationMessage: res.data.message,
          register: true,
        });
      })
      .catch((err) => {
        console.log(`Error while registering user${err}`);
        this.setState({
          errorMessage: `${err.response.data.message} ${err.message}`,
          register: true,
        });
      });
  };
  componentWillMount() {
    this.registerUser();
  }
  render() {
    const { form } = this.props;
    const { errorMessage, registrationMessage, register } = this.state;
    return (
      <div>
        {register == true &&
          (errorMessage != null ? (
            <div class="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          ) : (
            <div class="alert alert-success" role="alert">
              <h4 class="alert-heading">{registrationMessage}</h4>
              <p>
                Thank you for registering! A confirmation link is sent to your{" "}
                {form.email}.
              </p>
            </div>
          ))}
      </div>
    );
  }
}
export default Fourth;
