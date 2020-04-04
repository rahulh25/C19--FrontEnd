import React from "react";
import "./register.component.css";
import RegisterWizard from "./RegisterWizard/wizard";

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <RegisterWizard />
    );
  }
}

export default Register;
