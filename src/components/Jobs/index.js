import React, { useState, useLayoutEffect } from 'react';
import { ErrorBanner } from '../../lib/components';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import { JobsHeader, JobCard, JobsSkeleton } from './components';
import { usePaginatedQuery } from 'react-query'
import { getPaginatedJobsBySearch } from '../../lib/api'
import { makeStyles } from '@material-ui/core/styles';
import './styles/index.css';

const PAGE_SIZE = 5;
const useStyles = makeStyles({
  pagination: {
    justifyContent: 'center',
  },
  container: {
    minHeight: '100%',
    width: '100%',
    padding: '16px',
  },
});

export const Jobs = () => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const { resolvedData, isFetching, status, error } = usePaginatedQuery(['jobs', query, currentPage, PAGE_SIZE], getPaginatedJobsBySearch)

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, resolvedData]);

  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  if (status === "loading") {
    return (<Container classes={{ root: classes.container }}>
      <JobsSkeleton />
    </Container>
    );
  }

  if (status === "error") {
    return (<Container classes={{ root: classes.container }}>
      <ErrorBanner error={error} message={error} />
      <JobsSkeleton />
    </Container>
    );
  }

  const jobsElement = resolvedData && resolvedData.result && resolvedData.total ? (
    <>
      <List subheader={<JobsHeader setQuery={setQuery} />}>
        {isFetching && <JobsSkeleton />}
        {!isFetching &&
          resolvedData.result &&
          resolvedData.result.map((item) => <JobCard key={item._id} job={item} />)}
      </List>
      <Pagination
        count={
          Math.floor(resolvedData.total / PAGE_SIZE) +
          (resolvedData.total % PAGE_SIZE === 0 ? 0 : 1)
        }
        page={currentPage}
        onChange={handlePageChange}
        classes={{ ul: classes.pagination }}
      />
    </>
  ) : null

  return (
    <Container classes={{ root: classes.container }}>
      {jobsElement}
    </Container>
  );
};
