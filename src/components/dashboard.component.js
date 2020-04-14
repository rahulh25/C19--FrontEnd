import React from "react";
import { withRouter } from "react-router";
import axios from "axios";
import * as Constants from "../constants";
import './dashboard.component.css';

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
        <div>
                <div id="header">
                    <h2 id="main-heading">Want some help with your project??? <br/>
                    Post a Job...</h2>
                    <p id="tag-line">Contact skilled people within minutes. View profiles, ratings and contact them.</p>
                </div>
                <div id="register-form">
                    <div>
                        <strong><label for="name">Choose a name for your project</label></strong><br/>
                        <input id="input-field" type="text" name="name"placeholder=" e.g. Build me a website"/>
                    </div>
                    <div>
                        <strong><label for="project">Tell us more about your project</label></strong><br/>
                        <textarea id="input-field-desc" name="project" placeholder=" Describe your project here"></textarea>
                    </div>
                    <div>
                        <strong>Committment hours : </strong><br/>

                        <label for="hours">Choose committment hours needed per week : </label>

                        <select id="hours">
                        <option value="less than 5">{'<'}5</option>
                        <option value="5-10">5-10</option>
                        <option value="11-20">11-20</option>
                        <option value="greater than 20">{'>'}20</option>
                        </select>
                    </div>
                    <div id="upload-container">
                        <button id="upload-btn">Upload Files</button>
                        <p id="upload-para">Upload any images or documents that might be helpful in explaining your brief here (Max file size: 25 MB).</p>
                    </div>
                    <button id="post-btn">Post Job</button>
                </div>
                
            </div>
      </div>
    );
  }
}
export default withRouter(Dashboard);
