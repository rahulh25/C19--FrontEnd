import React, { useEffect, useState, useLayoutEffect } from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";
import { JobsHeader, JobCard, JobsSkeleton } from "./components";
import { getJobsBySearch, getJobs } from "../../actions/jobPostingActions";
import { makeStyles } from "@material-ui/core/styles";
import "./styles/index.css";
import { Toolbar } from "../Toolbar";
import { useDispatch, useSelector } from "react-redux";
import ErrorNotification from "../error";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import MultiValuedSelect from "../MultivaluedSelect";
import { skillsData, JOBS_OLDEST, JOBS_LATEST } from "../../constants";
import { MdClear } from "react-icons/md";
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
  card: {
    width: "30%",
    marginRight: "20px",
  },
});

export const Jobs = (props) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const data = useSelector((state) => state.jobsReducer);
  const userData = useSelector((state) => state.getUserInfoReducer);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const sortBy = data.sortBy;
  const jobsStore = data.jobs;
  const isFetching = data.loading;
  const error = data.error;

  useEffect(() => {
    if (error != null) {
      setStatus("error");
      setErrorMessage(error);
    } else {
      setStatus("ok");
    }
  }, [error]);
  useEffect(() => {
    dispatch(getJobs());
  }, []);
  useEffect(() => {
    // user logged in
    if (userData.data.skills != undefined && userData.data.skills != null) {
      setSelectedSkills(userData.data.skills);
    }
  }, [userData]);
  useEffect(() => {
    console.log(userData, jobsStore);
    applyFilters(jobsStore, userData.data.skills, sortBy);
  }, [jobsStore, userData]);

  const sortJobs = (jobsParam, sortBy) => {
    if (sortBy === JOBS_LATEST) {
      return [...jobsParam].sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.postedDate) - new Date(a.postedDate);
      });
    } else if (sortBy === JOBS_OLDEST) {
      return [...jobsParam].sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.postedDate) - new Date(b.postedDate);
      });
    }
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, jobsStore]);

  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };
  const applyFilters = (jobsParam, skills, sortBy) => {
    var sortedJobs = sortJobs(jobsParam, sortBy);
    var filteredBySkills = filterBySkills(sortedJobs, skills);
    setJobs(filteredBySkills);
  };
  const filterBySkills = (jobsParam, skills) => {
    if (skills === undefined) return jobsParam;
    if (skills.length == 0) return jobsParam;
    return jobsParam.filter((j) => {
      const found = j.skills.some((r) => skills.includes(r));
      return found;
    });
  };

  const handleSearchQuery = (query) => {
    setQuery(query);
    if (query === "") {
      ////search query empty, get all jobs
      setJobs(jobsStore);
      applyFilters(jobsStore, selectedSkills, sortBy);
    } else {
      getJobsBySearch(query)
        .then((searchedJobs) => {
          setStatus("ok");
          setJobs(searchedJobs);
          applyFilters(searchedJobs, selectedSkills, sortBy);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            ///no jobs found for the query
            setStatus("ok");
            setJobs([]);
          } else {
            setStatus("error");
            setErrorMessage(err.message);
          }
        });
    }
  };
  const hanldeSortJobs = (sortBy) => {
    var sortedJobs = sortJobs(jobs, sortBy);
    setJobs(sortedJobs);
  };

  const handleClearSkills = () => {
    setQuery("");
    applyFilters(jobsStore, [], sortBy);
    setSelectedSkills([]);
  };
  if (status === "error") {
    return (
      <Container classes={{ root: classes.container }}>
        <ErrorNotification message={errorMessage} />
        <JobsSkeleton />
      </Container>
    );
  }
  // Logic for displaying jobs
  const indexOfLastJob = currentPage * PAGE_SIZE;
  const indexOfFirstJob = indexOfLastJob - PAGE_SIZE;
  const currentJobs = jobs ? jobs.slice(indexOfFirstJob, indexOfLastJob) : null;

  const jobsElement = currentJobs ? (
    <>
      <div className="jobsPane">
        <Card classes={{ root: classes.card }}>
          <CardContent>
            <h5>Skills</h5>
            <MultiValuedSelect
              name="skills"
              selectedData={selectedSkills}
              data={skillsData}
              updateForm={(key, value) => {
                setQuery("");
                setSelectedSkills(value);
                console.log(jobsStore, value);
                applyFilters(jobsStore, value, sortBy);
              }}
            />
            <button onClick={handleClearSkills} className="styledBtn">
              Clear Skills <MdClear />
            </button>

            <Divider style={{ marginTop: "20px", color: "lightgrey" }} />
          </CardContent>
        </Card>

        <List
          style={{ width: "70%" }}
          subheader={
            <JobsHeader
              query={query}
              jobsCount={jobs.length}
              setQuery={handleSearchQuery}
              sortJobs={hanldeSortJobs}
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
      </div>
      {currentJobs.length > 0 && (
        <Pagination
          count={
            Math.floor(jobs.length / PAGE_SIZE) +
            (jobs.length % PAGE_SIZE === 0 ? 0 : 1)
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
