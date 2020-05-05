import {
  REGISTRATION_FAILURE,
  REGISTRATION_SUCCESS,
  NETWORK_ERROR,
  VALID_EMAIL,
  INVALID_EMAIL,
  ALREADY_EXISTS,
  DOES_NOT_EXISTS,
  RESET_REGISTRATION,
} from "../../actions/types";
const initialState = {
  registerMessage: null,
  register: false,
  error: null,
  success: null,
  isEmailExists: null,
  isEmailValid: null,
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_REGISTRATION:
      return initialState;
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        registerMessage: action.payload,
        register: true,
        error: null,
      };
    case REGISTRATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case NETWORK_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case VALID_EMAIL:
      return {
        ...state,
        isEmailValid: true,
      };
    case INVALID_EMAIL:
      return {
        ...state,
        isEmailValid: false,
      };
    case ALREADY_EXISTS:
      return {
        ...state,
        isEmailExists: true,
      };
    case DOES_NOT_EXISTS:
      return {
        ...state,
        isEmailExists: false,
      };
    default:
      return state;
  }
};
