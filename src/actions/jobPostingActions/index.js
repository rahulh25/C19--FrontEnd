import axios from "axios";
import {
  LOADED_JOBS,
  LOADING_JOBS,
  JOBS_ERROR,
  UPDATE_SORTBY,
} from "../types";

export const getJobs = () => async (dispatch) => {
  dispatch({ type: LOADING_JOBS });

  try {
    const res = await axios.get("http://localhost:3000/dev/jobPosting");
    if (res.status === 200) {
      dispatch({ type: LOADED_JOBS, payload: res.data.message });
    } else {
      dispatch({ type: JOBS_ERROR, payload: res.data.message });
    }
  } catch (error) {
    // handle error
    dispatch({ type: JOBS_ERROR, payload: error.message });
  }
};

export const getJobsBySearch = (query) => {
  return axios
    .get(`http://localhost:3000/dev/jobPosting/searchjobs/${query}`)
    .then((res) => {
      return res.data.message;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const updateSortBy = (sortBy) => async (dispatch) => {
  dispatch({ type: UPDATE_SORTBY, payload: sortBy });
};
