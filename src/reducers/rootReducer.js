import { combineReducers } from "redux";
import { jobsReducer } from "./JobsReducer";
import { registrationReducer } from "./userRegistrationReducer";
import { getUserInfoReducer } from "./getUserInfoReducer";
import { contributorReducer } from "./ContributorReducer";
export default combineReducers({
  jobsReducer,
  registrationReducer,
  getUserInfoReducer,
  contributorReducer,
});
