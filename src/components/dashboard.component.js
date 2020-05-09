import React from "react";
import "./dashboard.component.css";
import NotificationAlert from "react-notification-alert";
import { getUserInfo } from "../actions/getUserInfoActions";
import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import { Toolbar } from "../components/Toolbar";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: (userId, access_token) =>
    dispatch(getUserInfo(userId, access_token)),
});
const mapStateToProps = (state) => {
  const { getUserInfoReducer } = state;
  return {
    status: getUserInfoReducer.status,
    data: getUserInfoReducer.data,
    message: getUserInfoReducer.message,
    error: getUserInfoReducer.error,
  };
};
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const { cookies, getUserInfo } = this.props;
    const accessInfo = cookies.get("access_info");
    if (accessInfo != undefined) {
      ///user logged in
      getUserInfo(accessInfo.userid, accessInfo.token);
    } else {
      ///redirect to login page
      this.props.history.push("/login");
    }
  }
  componentDidUpdate() {
    this.props.status === "error" &&
      this.refs.errornotify.notificationAlert({
        place: "tc",
        message: <div>{this.props.error}</div>,
        type: "danger",
        autoDismiss: 7,
      });
  }
  render() {
    return (
      <div>
        <NotificationAlert ref="errornotify" />
        <Toolbar />
        {/* <pre>{user}</pre>
        {error && (
          <div class="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <div>
          <div id="header">
            <h2 id="main-heading">
              Want some help with your project??? <br />
              Post a Job...
            </h2>
            <p id="tag-line">
              Contact skilled people within minutes. View profiles, ratings and
              contact them.
            </p>
          </div>
          <div id="register-form">
            <div>
              <strong>
                <label for="name">Choose a name for your project</label>
              </strong>
              <br />
              <input
                id="input-field"
                type="text"
                name="name"
                placeholder=" e.g. Build me a website"
              />
            </div>
            <div>
              <strong>
                <label for="project">Tell us more about your project</label>
              </strong>
              <br />
              <textarea
                id="input-field-desc"
                name="project"
                placeholder=" Describe your project here"
              ></textarea>
            </div>
            <div>
              <strong>Committment hours : </strong>
              <br />

              <label for="hours">
                Choose committment hours needed per week :{" "}
              </label>

              <select id="hours">
                <option value="less than 5">{"<"}5</option>
                <option value="5-10">5-10</option>
                <option value="11-20">11-20</option>
                <option value="greater than 20">{">"}20</option>
              </select>
            </div>
            <div id="upload-container">
              <button id="upload-btn">Upload Files</button>
              <p id="upload-para">
                Upload any images or documents that might be helpful in
                explaining your brief here (Max file size: 25 MB).
              </p>
            </div>
            <button id="post-btn">Post Job</button>
          </div>
        </div> */}
      </div>
    );
  }
}
export default withRouter(
  withCookies(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
);
