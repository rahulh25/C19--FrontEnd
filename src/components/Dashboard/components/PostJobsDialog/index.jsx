import React, { useState } from 'react';
import { useMutation, queryCache } from 'react-query';
import { useCookies } from 'react-cookie';
import Button from '@material-ui/core/Button';
import ChipInput from 'material-ui-chip-input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { postJob } from '../../../../lib/api';

export const PostJobsDialog = ({ viewerId, onClose, open }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [skills, setSkills] = useState([]);
  const [weeklyCommitment, setWeeklyCommitment] = useState(null);
  const [cookies] = useCookies(['access_info']);
  const [mutateJobs] = useMutation(postJob, {
    onSuccess: () => {
      queryCache.refetchQueries('jobs');
      console.log('success');
      onClose();
    },
    onError: console.log,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutateJobs({
      userID: viewerId,
      jobTitle,
      description: jobDescription,
      weeklycommitment: weeklyCommitment,
      skills,
      accessToken: cookies.access_info.token,
    });
  };

  return (
    <Dialog
      aria-labelledby="post-jobs-title"
      aria-describedby="post-jobs-description"
      onClose={onClose}
      open={open}
    >
      <DialogTitle id="post-jobs-title">Post a Job</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Tell us a little bit about the job you'd like to post!
        </DialogContentText>
        <form onSubmit={handleSubmit} id="job-form">
          <TextField
            id="job-title"
            label="Job Title"
            helperText="We'll display the job with this title"
            fullWidth
            required
            max="50"
            margin="normal"
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <TextField
            id="job-description"
            label="Job Description"
            helperText="Tell us a little bit about the job itself"
            multiline
            fullWidth
            required
            max="1000"
            rows="10"
            margin="normal"
            onChange={(e) => setJobDescription(e.target.value)}
          />
          <TextField
            id="job-commitment"
            label="Weekly Time Commitment"
            helperText="How many hours a week are you asking from a candidate"
            fullWidth
            required
            margin="normal"
            inputProps={{ min: 1, max: 80 }}
            type="number"
            onChange={(e) => setWeeklyCommitment(e.target.value)}
          />
          <ChipInput
            id="job-skills"
            helperText="Tell us about some skills a candidate should have"
            fullWidth
            margin="normal"
            label="Skills"
            onChange={setSkills}
            required={skills.length === 0}
          />
          <DialogActions>
            <Button type="submit" htmlFor="job-form">
              Post
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
