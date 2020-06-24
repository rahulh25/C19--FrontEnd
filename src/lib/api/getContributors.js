import axios from 'axios';
import { GET_CONTRIBUTOR } from '../../constants';

export const getContributors = async (
  _key
) => {
  
  const {
    data: { message },
  } = await axios.get(
    `${GET_CONTRIBUTOR}`
  );
  return message;
};
