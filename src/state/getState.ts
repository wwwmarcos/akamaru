import { State } from 'interfaces/State'

const getState = (name: string, states: State[]): State => states.find(
  state => state.name === name
)

export {
  getState
}
