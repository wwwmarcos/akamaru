import { getRandomResponse } from './getRandomResponse'

const sendResponse = (responses: string[]): { response: string } => ({
  response: getRandomResponse(responses)
})

export {
  sendResponse
}
