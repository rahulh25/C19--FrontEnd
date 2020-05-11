import React from 'react';
import './homepage.component.css';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import BarChartIcon from '@material-ui/icons/BarChart';
import CreateIcon from '@material-ui/icons/Create';
import PeopleIcon from '@material-ui/icons/People';
import Volunteer from './images/volunteer.png';
import Button from '@material-ui/core/Button';



class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* Title */}
        <div class="container-fluid" id="main-choice-section">
          {/* image toggle */}
          <div id="skunks-image">
            <img src={Volunteer} alt="researcher"></img>
          </div>
          {/* buttons */}
          <div id="skunks-btn">
              <h1 id="title-heading">Hire expert freelancers for any job....</h1>
              <Button variant="contained" color="secondary" id="researcher-btn">
                I am a COVID 19 First Responder/Researcher
              </Button>
              <Button variant="contained" color="secondary" id="volunteer-btn">
                I want to Volunteer Freelance
              </Button>
          </div>
          
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
                <WorkOutlineIcon
                  style={{ fontSize: 150, margin: 'auto', paddingTop: '5%' }}
                >
                </WorkOutlineIcon>
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
                <ImportantDevicesIcon
                  style={{ fontSize: 150, margin: 'auto', paddingTop: '5%' }}
                >
                  
                </ImportantDevicesIcon>
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
                <LocalAtmIcon
                  style={{ fontSize: 150, margin: 'auto', paddingTop: '5%' }}
                >
                  
                </LocalAtmIcon>
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
          <h3>Know more about it !!</h3>
        </div>
        {/* Main Body 2 */}
        <div class="container" id="body-main-2">
          <div class="row">
            <div class="col-sm">
              <div class="card" id="">
              <BarChartIcon style={{ fontSize: 150, margin: 'auto', paddingTop: '5%', border : '2px solid black', borderRadius : '20%'}}/>
                <div class="card-body">
                  <a href="#" id="card-title" class="card-title">VISUALIZATIONS</a>
                  <p class="card-text">See the interactive visualizations here..</p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card" id="">
              <CreateIcon style={{ fontSize: 150, margin: 'auto', paddingTop: '5%', border : '2px solid black', borderRadius : '20%'}}/>
                <div class="card-body">
                <a href="#" id="card-title" class="card-title">BLOGS</a>
                  <p class="card-text">Get to know from our client's stories..</p>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card" id="">
              <PeopleIcon style={{ fontSize: 150, margin: 'auto', paddingTop: '5%', border : '2px solid black', borderRadius : '20%'}}/>
                <div class="card-body">
                <a href="#" id="card-title" class="card-title">CONTRIBUTORS</a>
                  <p class="card-text">See who contibuted to make this happen..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="container" id="body-main-2">
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
        </div> */}
      </React.Fragment>
    );
  }
}

export default Homepage;
