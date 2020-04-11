import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import { jobsReducer } from './JobsReducer';
export default combineReducers({
  simpleReducer,
  jobsReducer,
});
