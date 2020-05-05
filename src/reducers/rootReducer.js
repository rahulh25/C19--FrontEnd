import { combineReducers } from "redux";
import { jobsReducer } from "./JobsReducer";
import { registrationReducer } from "./userRegistrationReducer";
export default combineReducers({
  jobsReducer,
  registrationReducer,
});
