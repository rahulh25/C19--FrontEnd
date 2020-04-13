import { JOBS_ERROR, LOADED_JOBS, LOADING_JOBS } from '../../actions/types';
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
    case LOADING_JOBS:
      return {
        ...state,
        loading: true,
      };
    case JOBS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
