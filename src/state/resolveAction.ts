import { State, Action, UnknownIntentAction } from 'interfaces/State'
import { getState } from './getState'
import { UserSession } from 'interfaces/RikudoConfig'

const resolveAction = async (options: {
  action: Action | UnknownIntentAction,
  availableStates: State[],
  currentStateConfig: State,
  session: UserSession
}): Promise<{ responses: string[], nextState?: { name: string, intent?: string } }> => {

  const { action, availableStates, currentStateConfig, session } = options

  if (action.handler) {
    const { responses, nextState } = await action.handler(session)

    return {
      responses,
      nextState
    }
  }

  if (action.responses) {
    return {
      responses: action.responses,
      nextState: action.goToState
    }
  }

  if (action.goToState) {
    const nextStateConfig = getState(
      action.goToState.name,
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
