
type Action = {
  onIntent?: string,
  responses?: string[],
  goToState?: string
}

type UnknownIntentAction = {
  responses?: string[],
  goToState?: string
}

type State = {
  name: string
  startTexts: string[]
  unknownIntentAction: UnknownIntentAction
  actions: Action[]
}

export {
  State,
  Action,
  UnknownIntentAction
}
