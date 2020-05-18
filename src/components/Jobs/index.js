import React, { useEffect, useState, useLayoutEffect } from "react";
import List from "@material-ui/core/List";
import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";
import { JobsHeader, JobCard, JobsSkeleton } from "./components";
import { getJobsBySearch, getJobs } from "../../actions/jobPostingActions";
import { makeStyles } from "@material-ui/core/styles";
import "./styles/index.css";
import { Toolbar } from "../Toolbar";
import { useDispatch, useSelector } from "react-redux";
import ErrorNotification from "../error";

const PAGE_SIZE = 5;
const useStyles = makeStyles({
  pagination: {
    justifyContent: "center",
  },
  container: {
    minHeight: "100%",
    width: "100%",
    padding: "16px",
  },
});

export const Jobs = () => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const data = useSelector((state) => state.jobsReducer);
  const resolvedData = data.jobs;
  const isFetching = data.loading;
  const error = data.error;
  var status = "";
  if (error != null) {
    status = "error";
  } else {
    status = "ok";
  }

  useEffect(() => {
    // Your code here
    dispatch(getJobs());
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, resolvedData]);

  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };
  const handleSearchQuery = (query) => {
    setQuery(query);
    if (query === "") {
      ////search query empty, get all jobs
      dispatch(getJobs());
    } else {
      dispatch(getJobsBySearch(query));
    }
  };

  if (status === "error") {
    return (
      <Container classes={{ root: classes.container }}>
        <ErrorNotification message={error} />
        <JobsSkeleton />
      </Container>
    );
  }
  // Logic for displaying jobs
  const indexOfLastJob = currentPage * PAGE_SIZE;
  const indexOfFirstJob = indexOfLastJob - PAGE_SIZE;
  const currentJobs = resolvedData.slice(indexOfFirstJob, indexOfLastJob);

  const jobsElement = currentJobs ? (
    <>
      <List
        subheader={
          <JobsHeader
            query={query}
            jobsCount={resolvedData.length}
            setQuery={handleSearchQuery}
          />
        }
      >
        {isFetching && <JobsSkeleton />}
        {!isFetching && currentJobs && currentJobs.length > 0 ? (
          currentJobs.map((item) => <JobCard key={item._id} job={item} />)
        ) : (
          <div>Sorry, we could not find any matching jobs.</div>
        )}
      </List>
      {currentJobs.length > 0 && (
        <Pagination
          count={
            Math.floor(resolvedData.length / PAGE_SIZE) +
            (resolvedData.length % PAGE_SIZE === 0 ? 0 : 1)
          }
          page={currentPage}
          onChange={handlePageChange}
          classes={{ ul: classes.pagination }}
        />
      )}
    </>
  ) : null;

  return (
    <Container classes={{ root: classes.container }}>
      <Toolbar />
      {jobsElement}
    </Container>
  );
};
