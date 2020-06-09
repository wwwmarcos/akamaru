import { getRandomResponse } from './getRandomResponse'

const sendResponse = (responses: Array<Array<string>>): { response: string[] } => ({
  response: responses.map(response => getRandomResponse(response))
})

export {
  sendResponse
}
