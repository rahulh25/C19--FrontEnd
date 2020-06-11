// export const API_URL = 'http://localhost:3000/dev/';
export const API_URL =
  'http://a64ab8a727aa9447baecb857aca27bec-1035675610.us-east-1.elb.amazonaws.com:3000/dev/';
export const ADD_USER_API = `${API_URL}user/registration/`;
export const GET_USERS = `${API_URL}user/`;
export const SIGNIN_USER_API = `${API_URL}user/login`;
export const GET_USER = `${API_URL}user/`;
export const UPDATE_USER = `${API_URL}user/update/`;
export const PASSWORD_RESET_REQUEST = `${API_URL}password/passwordreset`;
export const PASSWORD_RESET = `${API_URL}password/confirmresetpassword`;
export const GET_JOBS = `${API_URL}jobPosting`;
export const POST_JOBS = `${API_URL}jobPosting/addJob`;
export const skillsData = [
  'Web Development',
  'Node JS',
  'MongoDB',
  'PowerBI',
  'Tableau',
  'ASP.NET',
  'C#',
  'JAVA',
  'Javascript',
  'haskell',
  'sql',
  'idris',
  'design',
  'Python',
];
export const JOBS_LATEST = `Latest`;
export const JOBS_OLDEST = `Oldest`;
