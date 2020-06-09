import { UserSession } from './RikudoConfig'

type Response = {
  responses: string[]
  nextState?: {
    name: string
    intent: string
  }
}

type Action = {
  onIntent?: string,
  responses?: string[],
  goToState?: {
    name: string,
    intent?: string
  },
  handler?: (session: UserSession) => Promise<Response> | Response
}

type UnknownIntentAction = {
  handler?: (session: UserSession) => Promise<Response> | Response
  responses?: string[]
  goToState?: {
    name: string,
    intent?: string
  }
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
