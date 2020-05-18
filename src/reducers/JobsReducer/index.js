import {
  JOBS_ERROR,
  LOADED_JOBS,
  LOADING_JOBS,
  NO_JOBS,
} from "../../actions/types";
const initialState = {
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
      return initialState;
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
    default:
      return state;
  }
};
