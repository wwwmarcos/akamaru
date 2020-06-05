import { Intent } from './Intent'
import { State } from './State'

type RikudoConfig = {
  allIntents: Intent[]
  language: string
  training: string[]
  states: State[]
}

export {
  RikudoConfig
}
