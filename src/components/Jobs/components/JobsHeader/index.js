import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { getJobsBySearch } from '../../../../actions/jobPostingActions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px',
  },
});

export const JobsHeader = () => {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch(getJobsBySearch(search));
    }
    console.log(search);
  };
  return (
    <Paper classes={{ root: classes.paper }}>
      <TextField
        id="jobs-search"
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
        helperText="search by skills or time commitment"
      />
    </Paper>
  );
};
