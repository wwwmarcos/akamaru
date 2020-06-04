import { Intent } from './Intent'
import { State } from './State'

type RikudoConfig = {
  allIntents: Intent[]
  training: string[],
  states: State[]
}

export {
  RikudoConfig
}
