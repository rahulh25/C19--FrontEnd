import React from 'react';
import './homepage.component.css';
import Icon from '@material-ui/core/Icon';

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* Title */}
        <div class="container-fluid" id="main-choice-section">
          <h1 id="title-heading">Hire expert freelancers for any job....</h1>
          <button class="btn btn-primary" id="researcher-btn">
            I am a COVID 19 First Responder/Researcher
          </button>
          <button class="btn btn-outline-secondary" id="volunteer-btn">
            I want to Volunteer Freelance
          </button>
        </div>
        {/* Body Title */}
        <div class="container" id="body-title">
          <h3>Want to get the work done???</h3>
        </div>
        {/* Main Body */}
        <div class="container" id="body-main">
          <div class="row">
            <div class="col-sm">
              <div class="card" id="post-project">
                <Icon
                  style={{ fontSize: 150, margin: 'auto', paddingTop: '5%' }}
                >
                  work_outline
                </Icon>
                <div class="card-body">
                  <h5 class="card-title">Post Project</h5>
                  <p class="card-text">
                    Simply post your project here in which you need help!!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card" id="choose-volunteers">
                <Icon
                  style={{ fontSize: 150, margin: 'auto', paddingTop: '5%' }}
                >
                  important_devices
                </Icon>
                <div class="card-body">
                  <h5 class="card-title">Choose Volunteer Freelancers</h5>
                  <p class="card-text">
                    There are many freelancers, you could connect to which will
                    help you with your project!!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card" id="blog-project">
                <Icon
                  style={{ fontSize: 150, margin: 'auto', paddingTop: '5%' }}
                >
                  local_atm
                </Icon>
                <div class="card-body">
                  <h5 class="card-title">
                    Optionally Blog about the Project when done
                  </h5>
                  <p class="card-text">
                    Share your experience with us!! We appreciate feedback..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Body Title 2 */}
        <div class="container" id="body-title">
          <h3>What's great about it???</h3>
        </div>
        {/* Main Body 2 */}
        <div class="container" id="body-main-2">
          <div class="row">
            <div class="col-sm">
              <div class="card" id="">
                <div class="card-body">
                  <h5 class="card-title">CONTENT</h5>
                  <p class="card-text">CONTENT</p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card" id="">
                <div class="card-body">
                  <h5 class="card-title">CONTENT</h5>
                  <p class="card-text">CONTENT</p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card" id="">
                <div class="card-body">
                  <h5 class="card-title">CONTENT</h5>
                  <p class="card-text">CONTENT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" id="body-main-2">
          <div class="row">
            <div class="col-sm">
              <div class="card" id="">
                <div class="card-body">
                  <h5 class="card-title">CONTENT</h5>
                  <p class="card-text">CONTENT</p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card" id="">
                <div class="card-body">
                  <h5 class="card-title">CONTENT</h5>
                  <p class="card-text">CONTENT</p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card" id="">
                <div class="card-body">
                  <h5 class="card-title">CONTENT</h5>
                  <p class="card-text">CONTENT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
