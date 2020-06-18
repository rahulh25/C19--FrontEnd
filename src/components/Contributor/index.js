import React, { useState, useLayoutEffect } from 'react';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import { ContributorCard, ContributorSkeleton } from './components';
import { makeStyles } from '@material-ui/core/styles';
import './styles/index.css';
import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContributors } from '../../actions/contributorActions';
import { Toolbar } from "../Toolbar";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


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


 const useContributor = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.contributorReducer.contributors);
  const loading = useSelector((state) => state.contributorReducer.loading);
  const error = useSelector((state) => state.contributorReducer.error);

  const fetch = useCallback(() => {
    const queryListings = async () => {
      dispatch(getContributors());
    };

    queryListings();
  }, [dispatch]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [listings, loading, error];
};

export const Contributor = () => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [listings, loading, error] = useContributor();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, listings]);

  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const sortContributors = (contributorsParam) => {
      return [...contributorsParam].sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        if(b.skill > a.skill)
        {return -1;}
        if(b.skill < a.skill)
        {return 1;}
         return -1;
      });
  };

  const listing = sortContributors(listings);
  const dataSource =[...listing];


  return (
    <Container classes={{ root: classes.container }}>
      <Toolbar/>
      <AppBar position="relative">
          <Typography variant="h5" color="inherit" noWrap>
            Contributor
          </Typography> 
      </AppBar>
      <GridList cellHeight={280} className={classes.gridList} cols={2}>
        
        {dataSource.map((tile) => (
          <GridListTile key={tile.name}>
           <ContributorCard contributor = {tile}/>
          </GridListTile>
        ))}
      </GridList>
      
    </Container>
  );
};
