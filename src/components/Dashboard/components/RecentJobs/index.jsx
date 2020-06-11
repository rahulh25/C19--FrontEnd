import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { PostJobsDialog } from '../../components';
import ProjectsIcon from '../../assets/projectsIcon.png';

const useStyles = makeStyles({
  callToAction: {
    width: '200px',
    height: '50px',
  },
  recentJobs: {
    border: '1px solid black',
    transition: '0.3s',
    width: '80%',
    borderRadius: '5px',
    height: '500px',
    '&:hover': {
      boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
    },
  },
});

export const RecentJobs = ({
  viewer,
  dialogOpen,
  handleDialogClose,
  handleDialogOpen,
}) => {
  console.log(viewer);
  const classes = useStyles();

  const volunteerCallToAction = (
    <Button
      component={RouterLink}
      variant="contained"
      to="/jobs"
      color="primary"
      classes={{ root: classes.callToAction }}
    >
      Browse Jobs
    </Button>
  );

  const researcherCallToAction = (
    <Button
      onClick={handleDialogOpen}
      variant="contained"
      color="primary"
      classes={{ root: classes.callToAction }}
    >
      Post Jobs
    </Button>
  );

  const jobsCallToActionElement =
    viewer && viewer.type === 'Volunteer'
      ? volunteerCallToAction
      : researcherCallToAction;

  const postJobsModalElement =
    viewer && viewer.type === 'Researcher' ? (
      <PostJobsDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        viewerId={viewer._id}
      />
    ) : null;

  return (
    <div className={classes.recentJobs}>
      <div class="container">
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
            <img alt="project-icon" src={ProjectsIcon} width="60" height="60" />
          </div>
          <div>Start working on jobs that meet your skills.</div>
          {jobsCallToActionElement}
          {postJobsModalElement}
        </div>
      </div>
    </div>
  );
};
