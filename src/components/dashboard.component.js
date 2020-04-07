import React from "react";
import { withRouter } from "react-router";
import axios from "axios";
import * as Constants from "../constants";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: "",
      user: "",
    };
  }
  componentWillMount() {
    this.getUserInfo();
  }
  getUserInfo = () => {
    const { state } = this.props.location;
    if (state === undefined) {
      ///redirect to login page
      this.props.history.push("/login");
    } else {
      const AuthStr = "Bearer ".concat(state.token);
      axios
        .get(`${Constants.GET_USER}${state.userid}`, {
          headers: { Authorization: AuthStr },
        })
        .then((res) => {
          console.log(res.data.message);
          this.setState({
            user: JSON.stringify(res.data.message, null, "\t"),
          });
        })
        .catch((err) => {
          console.log(
            `Error while getting user info ${err.message},${err.response.data.message}`
          );
          let message = `${err.response.data.message},
                       ${err.message}`;
          this.setState({
            error: true,
            errorMessage: message,
          });
        });
    }
  };
  render() {
    const { error, errorMessage, user } = this.state;
    return (
      <div>
        <pre>{user}</pre>
        {error && (
          <div class="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(Dashboard);
