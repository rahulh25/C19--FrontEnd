import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { JOBS_LATEST, JOBS_OLDEST } from '../../../../constants';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
  },
  root: {
    width: '30%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const JobsHeader = ({
  setQuery,
  query,
  setNoDataFound,
  setFilter,
  filter,
  jobsCount,
}) => {
  const classes = useStyles();
  const [search, setSearch] = useState(query);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    const trimmedValue = value.trim();
    setNoDataFound(null);
    setQuery(trimmedValue);
  };

  return (
    <Paper classes={{ root: classes.paper }}>
      <TextField
        id="jobs-search"
        classes={{ root: classes.root }}
        label="Search"
        value={search}
        onChange={handleSearch}
        helperText="search by skills or time commitment"
      />
      <Typography
        display="block"
        align="center"
        variant="h5"
        component="span"
        classes={{ h5: classes.resultsCount }}
      >
        {jobsCount} results
      </Typography>
      <FormControl>
        <InputLabel htmlFor="sort-filter">Sort by</InputLabel>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{
            name: 'sort-filter',
            id: 'sort-filter',
            'aria-label': 'Without label',
          }}
        >
          <MenuItem value={JOBS_LATEST}>{JOBS_LATEST}</MenuItem>
          <MenuItem value={JOBS_OLDEST}>{JOBS_OLDEST}</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
};
