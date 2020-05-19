import React, { useState, useRef, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { JOBS_LATEST, JOBS_OLDEST } from "../../../../constants";
import { useDispatch } from "react-redux";
import { sortJobs } from "../../../../actions/jobPostingActions";
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

export const JobsHeader = ({ setQuery, query, jobsCount }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [search, setSearch] = useState(query);
  const [height, setHeight] = useState(0);
  const [sortByDate, setSortByDate] = useState("Latest");

  const resultRef = useRef(null);
  const handlePostedDate = (e) => {
    setSortByDate(e.target.value);
    dispatch(sortJobs(e.target.value));
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
