import axios from 'axios';
import { LOADED_JOBS, LOADING_JOBS, JOBS_ERROR } from '../types';

export const getJobs = () => async (dispatch) => {
  dispatch({ type: LOADING_JOBS });

  try {
    const res = await axios.get('/dev/jobPosting');

    dispatch({ type: LOADED_JOBS, payload: res.message });
  } catch (error) {
    // handle error
    dispatch({ type: JOBS_ERROR });
  }
};
