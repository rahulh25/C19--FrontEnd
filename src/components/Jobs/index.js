import React, { useState, useLayoutEffect } from 'react';
import { ErrorBanner } from '../../lib/components';
import { useJobs } from '../../lib/api';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import { JobsHeader, JobCard, JobsSkeleton } from './components';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import './styles/index.css';

const PAGE_SIZE = 5;
const useStyles = makeStyles({
  pagination: {
    justifyContent: 'center',
  },
  container: {
    minHeight: '100%',
    padding: '16px',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d41b2c',
    },
  },
});

export const Jobs = () => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [listings, loading, error] = useJobs();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, listings]);

  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const dataSource =
    listings.length > PAGE_SIZE
      ? [...listings].splice((currentPage - 1) * PAGE_SIZE, PAGE_SIZE)
      : [...listings];

  return (
    <ThemeProvider theme={theme}>
      <Container classes={{ root: classes.container }}>
        <ErrorBanner error={error} message={error} />
        <List subheader={<JobsHeader />}>
          {loading && <JobsSkeleton />}
          {dataSource && dataSource.map((item) => <JobCard job={item} />)}
        </List>
        <Pagination
          count={
            Math.floor(listings.length / PAGE_SIZE) +
            (listings.length % PAGE_SIZE === 0 ? 0 : 1)
          }
          page={currentPage}
          onChange={handlePageChange}
          classes={{ ul: classes.pagination }}
        />
      </Container>
    </ThemeProvider>
  );
};
