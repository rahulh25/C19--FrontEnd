import { combineReducers } from "redux";
import { jobsReducer } from "./JobsReducer";
import { registrationReducer } from "./userRegistrationReducer";
import { getUserInfoReducer } from "./getUserInfoReducer";
export default combineReducers({
  jobsReducer,
  registrationReducer,
  getUserInfoReducer,
});
