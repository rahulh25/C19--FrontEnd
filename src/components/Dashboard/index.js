import React from 'react';
import './styles/index.css';
import NotificationAlert from 'react-notification-alert';
import { getUserInfo } from '../../actions/userInfoActions';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { Toolbar } from '../Toolbar';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import ProjectsIcon from './assets/projectsIcon.png';
import './styles/index.css';

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
    this.handleBrowseJobs = this.handleBrowseJobs.bind(this);
  }
  componentWillMount() {
    const { cookies, getUserInfo } = this.props;
    const accessInfo = cookies.get('access_info');
    if (accessInfo != undefined) {
      ///user logged in
      getUserInfo(accessInfo.userid, accessInfo.token);
    } else {
      ///redirect to homepage
      this.props.history.push('/');
    }
  }
  componentDidUpdate() {
    this.props.status === 'error' &&
      this.refs.errornotify.notificationAlert({
        place: 'tc',
        message: <div>{this.props.error}</div>,
        type: 'danger',
        autoDismiss: 7,
      });
  }
  handleBrowseJobs() {
    this.props.history.push('/jobs');
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <NotificationAlert ref="errornotify" />
        <Toolbar />
        <div className="outerContainer">
          <div class="recentJobsCard">
            <div class="container">
              <NotificationAlert ref="notify" />

              <Row>
                <Col md={8}>
                  {' '}
                  <h4>
                    <b>Recent Jobs</b>
                  </h4>
                </Col>
                <hr />
              </Row>
              <div className="browseJobs">
                <div>
                  <img src={ProjectsIcon} width="60" height="60" />
                </div>
                <div>Start working on jobs that meet your skills.</div>
                <div>
                  <button
                    onClick={this.handleBrowseJobs}
                    className="styledBtn"
                    style={{ width: 200, height: 50 }}
                  >
                    Browse Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="card text-white mb-3"
            style={{
              marginLeft: 10,
              height: 'max-content',
              backgroundColor: '#d41b2c',
            }}
          >
            <div class="card-body">
              <h5 class="card-title">
                Welcome back!
                <br /> {data.firstName} {data.lastName}
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(
  withCookies(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
);
