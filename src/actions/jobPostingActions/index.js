import axios from "axios";
import {
  LOADED_JOBS,
  LOADING_JOBS,
  JOBS_ERROR,
  NO_JOBS,
  SORT_JOBS,
} from "../types";

export const getJobs = (sortBy = "") => async (dispatch) => {
  dispatch({ type: LOADING_JOBS });

  try {
    const res = await axios.get("http://localhost:3000/dev/jobPosting");
    if (res.status === 200) {
      dispatch({ type: LOADED_JOBS, payload: res.data.message });
      sortBy != "" && dispatch({ type: SORT_JOBS, payload: sortBy });
    } else {
      dispatch({ type: JOBS_ERROR, payload: res.data.message });
    }
  } catch (error) {
    // handle error
    dispatch({ type: JOBS_ERROR, payload: error.message });
  }
};

export const getJobsBySearch = (query, sortBy = "") => async (dispatch) => {
  dispatch({ type: LOADING_JOBS });
  try {
    const res = await axios.get(
      `http://localhost:3000/dev/jobPosting/searchjobs/${query}`
    );
    if (res.status === 200) {
      dispatch({ type: LOADED_JOBS, payload: res.data.message });
      sortBy != "" && dispatch({ type: SORT_JOBS, payload: sortBy });
    } else {
      dispatch({ type: JOBS_ERROR, payload: res.data.message });
    }
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 404) {
      ///no data found
      dispatch({ type: NO_JOBS });
    } else {
      // handle error
      dispatch({ type: JOBS_ERROR, payload: error.message });
    }
  }
};

export const sortJobs = (sortBy) => async (dispatch) => {
  dispatch({ type: SORT_JOBS, payload: sortBy });
};
