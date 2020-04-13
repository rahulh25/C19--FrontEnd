import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ErrorBanner } from '../../lib/components';
import { useJobs } from '../../lib/api';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import { JobsHeader, JobCard } from './components';
import './styles/index.css';

const PAGE_SIZE = 5;
const useStyles = makeStyles({
  ul: {
    justifyContent: 'center',
  },
  container: {
    minHeight: '100%',
    padding: '16px',
  },
});

export const Jobs = () => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [listings, loading, error] = useJobs();

  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const dataSource =
    listings.length > PAGE_SIZE
      ? [...listings].splice((currentPage - 1) * PAGE_SIZE, PAGE_SIZE)
      : [...listings];

  return (
    <Container classes={{ root: classes.container }}>
      <ErrorBanner error={error} message={error} />
      {loading && <p>Loading...</p>}
      <List className="jobs__list" subheader={<JobsHeader />}>
        {dataSource && dataSource.map((item) => <JobCard job={item} />)}
      </List>
      <Pagination
        count={
          Math.floor(listings.length / PAGE_SIZE) +
          (listings.length % PAGE_SIZE === 0 ? 0 : 1)
        }
        page={currentPage}
        onChange={handlePageChange}
        classes={{ ul: classes.ul }}
      />
    </Container>
  );
};
