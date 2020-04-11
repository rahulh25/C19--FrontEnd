import React from "react";
import { withRouter } from "react-router";
import axios from "axios";
import * as Constants from "../constants";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div>
        ForgotPassword
      </div>
    );
  }
}
export default withRouter(ForgotPassword);
