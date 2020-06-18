import {
  CONTRIBUTOR_ERROR,
  LOADED_CONTRIBUTOR,
  LOADING_CONTRIBUTOR,
  
} from "../../actions/types";
//import { JOBS_LATEST } from "../../constants";
const initialState = {
  
  contributors: [],
  loading: false,
  error: null,
};

export const contributorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED_CONTRIBUTOR:
      return {
        ...state,
        contributors: action.payload,
        loading: false,
        error: null,
      };
    case LOADING_CONTRIBUTOR:
      return {
        ...state,
        loading: true,
      };
    
    case CONTRIBUTOR_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
