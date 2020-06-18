import axios from "axios";
import {
  LOADED_CONTRIBUTOR,
  LOADING_CONTRIBUTOR,
  CONTRIBUTOR_ERROR,
  
} from "../types";
import { GET_CONTRIBUTOR } from "../../constants";
export const getContributors = () => async (dispatch) => {
  dispatch({ type: LOADING_CONTRIBUTOR });

  try {
    const res = await axios.get(`${GET_CONTRIBUTOR}`);
    if (res.status === 200) {
      dispatch({ type: LOADED_CONTRIBUTOR, payload: res.data.message });
    } else {
      dispatch({ type: CONTRIBUTOR_ERROR, payload: res.data.message });
    }
  } catch (error) {
    // handle error
    dispatch({ type: CONTRIBUTOR_ERROR, payload: error.message });
  }
};


