import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
  },
  root: {
    width: "30%",
  },
});

export const JobsHeader = ({ setQuery, query, jobsCount }) => {
  const classes = useStyles();
  const [search, setSearch] = useState(query);

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
    const trimmedValue = search.trim();
    setQuery(trimmedValue);
  };

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
      {jobsCount} results
    </Paper>
  );
};
