import axios from 'axios';
import { GET_JOBS } from '../../constants';

export const getPaginatedJobsBySearch = async (
  _key,
  query,
  page,
  limit,
  filter
) => {
  const querySlug = query ? query : 100;
  const {
    data: { message },
  } = await axios.get(
    `${GET_JOBS}/searchjobs/${querySlug}?page=${page}&limit=${limit}&filter=${filter}`
  );
  return message;
};
