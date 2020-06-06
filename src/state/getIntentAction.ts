import { Action } from 'interfaces/State'

const getIntentAction = (
  actions: Action[],
  intent: string
): Action =>
  actions.find(
    config => config.onIntent === intent
  )

export {
  getIntentAction
}
