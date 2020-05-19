import {
  JOBS_ERROR,
  LOADED_JOBS,
  LOADING_JOBS,
  NO_JOBS,
  SORT_JOBS,
} from "../../actions/types";
import { JOBS_LATEST, JOBS_OLDEST } from "../../constants";
const initialState = {
  sortBy: JOBS_LATEST,
  jobs: [],
  loading: false,
  error: null,
};

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED_JOBS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
        error: null,
      };
    case NO_JOBS:
      return {
        ...state,
        jobs: [],
        loading: false,
        error: null,
      };
    case LOADING_JOBS:
      return {
        ...state,
        loading: true,
      };
    case JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SORT_JOBS:
      if (action.payload === JOBS_LATEST) {
        return {
          ...state,
          sortBy: JOBS_LATEST,
          jobs: state.jobs.sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.postedDate) - new Date(a.postedDate);
          }),
        };
      } else if (action.payload === JOBS_OLDEST) {
        return {
          ...state,
          sortBy: JOBS_OLDEST,
          jobs: state.jobs.sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(a.postedDate) - new Date(b.postedDate);
          }),
        };
      }
    default:
      return state;
  }
};
