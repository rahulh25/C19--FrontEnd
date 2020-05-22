import {
  JOBS_ERROR,
  LOADED_JOBS,
  LOADING_JOBS,
  UPDATE_SORTBY,
} from "../../actions/types";
import { JOBS_LATEST } from "../../constants";
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
    case LOADING_JOBS:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SORTBY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
