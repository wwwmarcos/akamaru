const getRandomResponse = (stateResponses: string[]): string =>
  stateResponses[Math.floor(Math.random() * stateResponses.length)]

export {
  getRandomResponse
}
