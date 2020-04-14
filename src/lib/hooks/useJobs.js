import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getJobs } from '../../actions/jobPostingActions';

export const useJobs = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.jobsReducer.jobs);
  const loading = useSelector((state) => state.jobsReducer.loading);
  const error = useSelector((state) => state.jobsReducer.error);

  const fetch = useCallback(() => {
    const queryListings = async () => {
      dispatch(getJobs());
    };

    queryListings();
  }, [dispatch]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [listings, loading, error];
};
