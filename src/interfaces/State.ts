
type IAction = {
  onIntent: string,
  responses?: string[],
  goToState?: string
}

type State = {
  name: string
  startTexts: string[]
  unknownIntentAction: {
    responses: string[]
  }
  actions: IAction[]
}

export {
  State
}
