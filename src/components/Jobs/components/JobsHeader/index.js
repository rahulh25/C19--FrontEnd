import React, { useState, useRef, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { JOBS_LATEST, JOBS_OLDEST } from "../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { updateSortBy } from "../../../../actions/jobPostingActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
  },
  root: {
    width: "30%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const JobsHeader = ({ setQuery, query, jobsCount, sortJobs }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.jobsReducer);

  const [search, setSearch] = useState(query);
  const [height, setHeight] = useState(0);
  const [sortByDate, setSortByDate] = useState(data.sortBy);

  const resultRef = useRef(null);
  const handlePostedDate = (e) => {
    setSortByDate(e.target.value);
    dispatch(updateSortBy(e.target.value));
    sortJobs(e.target.value);
  };
  const handleSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
    const trimmedValue = search.trim();
    setQuery(trimmedValue);
  };
  useEffect(() => {
    setHeight(resultRef.current.clientHeight);
  });
  useEffect(() => {
    setSearch(query);
  }, [query]);
  return (
    <Paper classes={{ root: classes.paper }}>
      <TextField
        id="jobs-search"
        classes={{
          root: classes.root,
        }}
        label="Search"
        value={search}
        onChange={handleSearch}
        helperText="search by skills or time commitment"
      />
      <div
        ref={resultRef}
        style={{ fontWeight: "bold", lineHeight: `${height}px` }}
      >
        {jobsCount} results
      </div>
      <div style={{ fontStyle: "bold" }}>
        {" "}
        Sort by{" "}
        <Select
          value={sortByDate}
          onChange={handlePostedDate}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={JOBS_LATEST}>{JOBS_LATEST}</MenuItem>
          <MenuItem value={JOBS_OLDEST}>{JOBS_OLDEST}</MenuItem>
        </Select>
      </div>
    </Paper>
  );
};
