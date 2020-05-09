import axios from "axios";
import { GET_USER } from "../../constants";
import {
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  RESET_USERINFO,
} from "../types";

export function getUserInfo(userId, accessToken) {
  return function (dispatch) {
    const AuthStr = "Bearer ".concat(accessToken);
    return axios
      .get(`${GET_USER}${userId}`, { headers: { Authorization: AuthStr } })
      .then((res) => {
        dispatch({ type: GET_USER_SUCCESS, payload: res.data.message });
      })
      .catch((err) => {
        dispatch({ type: GET_USER_FAILURE, payload: err.message });
      });
  };
}

export function clearUserInfo() {
  return function (dispatch) {
    dispatch({ type: RESET_USERINFO });
  };
}
