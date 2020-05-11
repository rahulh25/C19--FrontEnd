import {
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  RESET_USERINFO,
} from "../../actions/types";
const initialState = {
  status: null,
  data: {},
  message: null,
  error: null,
};

export const updateUserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        status: "ok",
        data: action.payload,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        data: {},
        status: "error",
        error: action.payload,
      };
    case RESET_USERINFO:
      return initialState;
    default:
      return state;
  }
};
