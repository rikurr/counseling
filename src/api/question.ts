import axios from 'axios'

const url = 'http://localhost:3001/questions'

export const getAllQuestion = async (): Promise<any> => {
  const response = await axios.get(url)
  return response.data
}
