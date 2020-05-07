import axios from 'axios'

export const getPaginatedJobsBySearch = async (_key, query, page, limit) => {
  const querySlug = query ? query : 100
  const { data: { message } } = await axios.get(`http://localhost:3000/dev/jobPosting/searchjobs/${querySlug}?page=${page}&limit=${limit}`)
  return message
}