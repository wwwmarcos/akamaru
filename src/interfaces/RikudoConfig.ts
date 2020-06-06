import { Intent } from './Intent'
import { State } from './State'

type UserSession = {
  userId: string
  currentStateName: string
  stack: {
    eventName?: string,
    intent?: string,
    action?: string
  }[],
  userData?: {}
}

type Resolvers = {
  saveSession: (userId: string, state: UserSession) => Promise<UserSession> | void
  getSession: (userId: string) => Promise<UserSession> | void
}

type BotDefinition = {
  allIntents: Intent[]
  language: string
  states: State[],
  resolvers: Resolvers
}

export {
  BotDefinition,
  Resolvers,
  UserSession
}
