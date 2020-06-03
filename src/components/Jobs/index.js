import React, { useState, useLayoutEffect } from 'react';
import { usePaginatedQuery } from 'react-query';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { ErrorBanner } from '../../lib/components';
import { Toolbar } from '../../components';
import { JobsFilterBox, JobsHeader, JobCard, JobsSkeleton } from './components';
import { getPaginatedJobsBySearch } from '../../lib/api';
import { JOBS_LATEST } from '../../constants';

const PAGE_SIZE = 5;
const useStyles = makeStyles({
  pagination: {
    justifyContent: 'center',
  },
  list: {
    width: '70%',
  },
  container: {
    minHeight: '100%',
    width: '100%',
    padding: '16px',
  },
  filterBox: {
    width: '30%',
    marginRight: '20px',
  },
  pane: {
    display: 'flex',
  },
});

export const Jobs = () => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [noDataFound, setNoDataFound] = useState(null);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(JOBS_LATEST);
  const { resolvedData, isFetching, status, error } = usePaginatedQuery(
    ['jobs', query, currentPage, PAGE_SIZE, filter],
    getPaginatedJobsBySearch,
    {
      staleTime: 1000 * 30,
      refetchOnWindowFocus: false,
      onError: (err) => {
        if (err.response.status === 404) {
          console.log(err.response);
          setNoDataFound(err.response);
        }
      },
    }
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, resolvedData]);

  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  if (status === 'loading') {
    return (
      <Container classes={{ root: classes.container }}>
        <JobsSkeleton />
      </Container>
    );
  }

  if (status === 'error') {
    return (
      <Container classes={{ root: classes.container }}>
        <ErrorBanner error={error} message={error.message} />
        <JobsSkeleton />
      </Container>
    );
  }

  const noDataErrorElement = noDataFound ? (
    <ErrorBanner
      error={noDataFound.statusText}
      message={`Sorry, it looks like we couldn't find any jobs matching your criteria`}
    />
  ) : null;

  const jobsElement =
    resolvedData && resolvedData.result ? (
      <>
        <List
          classes={{ root: classes.list }}
          subheader={
            <JobsHeader
              setQuery={setQuery}
              query={query}
              noDataFound={noDataFound}
              setNoDataFound={setNoDataFound}
              jobsCount={resolvedData.total}
              setFilter={setFilter}
              filter={filter}
            />
          }
        >
          {isFetching && <JobsSkeleton />}
          {!isFetching &&
            resolvedData.result &&
            resolvedData.result.map((item) => (
              <JobCard key={item._id} job={item} />
            ))}
        </List>
      </>
    ) : null;

  const paginationElement =
    resolvedData && resolvedData.result ? (
      <Pagination
        count={
          Math.floor(resolvedData.total / PAGE_SIZE) +
          (resolvedData.total % PAGE_SIZE === 0 ? 0 : 1)
        }
        page={currentPage}
        onChange={handlePageChange}
        classes={{ ul: classes.pagination }}
      />
    ) : null;

  return (
    <Container classes={{ root: classes.container }}>
      {/* <Toolbar /> */}
      <div className={classes.pane}>
        {noDataErrorElement}
        <JobsFilterBox setQuery={setQuery} />
        {jobsElement}
      </div>
      {paginationElement}
    </Container>
  );
};
