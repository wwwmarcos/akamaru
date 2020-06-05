import { State, Action, UnknownIntentAction } from '../interfaces/State'
import { getState } from './getState'

const resolveAction = (options: {
  action: Action | UnknownIntentAction,
  availableStates: State[],
  currentStateConfig: State
}): { responses: string[], nextState?: string } => {

  const { action, availableStates, currentStateConfig } = options

  if (action.responses) {
    return {
      responses: action.responses
    }
  }

  if (action.goToState) {
    const nextStateConfig = getState(
      action.goToState,
      availableStates
    )

    return {
      responses: nextStateConfig.startTexts,
      nextState: action.goToState
    }
  }

  return resolveAction({
    ...options,
    action: currentStateConfig.unknownIntentAction
  })
}

export {
  resolveAction
}
