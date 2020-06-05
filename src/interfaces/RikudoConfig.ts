import { Intent } from './Intent'
import { State } from './State'
import { INlpManager } from './INlpManager'

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
  bot: RikudoConfig
  nlp: INlpManager
  saveSession: (userId: string, state: UserSession) => Promise<UserSession>
  getSession: (userId: string) => Promise<UserSession>
}

type RikudoConfig = {
  allIntents: Intent[]
  language: string
  training: string[]
  states: State[],
  resolvers: Resolvers
}

export {
  RikudoConfig,
  Resolvers,
  UserSession
}
