const getRandomResponse = async (stateResponses: string[]): Promise<string> =>
  stateResponses[Math.floor(Math.random() * stateResponses.length)]

export {
  getRandomResponse
}
