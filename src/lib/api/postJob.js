import axios from 'axios';
import { POST_JOBS } from '../../constants';
export const postJob = async ({
  userID,
  accessToken,
  jobTitle,
  description,
  weeklycommitment,
  skills,
}) => {
  const {
    data: { message },
  } = await axios.post(
    `${POST_JOBS}/${userID}`,
    {
      jobTitle,
      description,
      weeklycommitment,
      skills: skills.toString(),
    },
    {
      headers: {
        'x-access-token': `Bearer ${accessToken}`,
      },
    }
  );

  return message;
};
