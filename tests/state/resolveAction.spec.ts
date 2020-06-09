
import { resolveAction } from '../../src/state/resolveAction'
import { states } from '../mockData'
import { Action } from '../../src/interfaces/State'
import { UserSession } from '../../src/interfaces/RikudoConfig'

describe('state/resolveAction', () => {

  const session: UserSession = {
    userId: '1',
    currentStateName: 'START'
  }

  it('should return the responses from action', async () => {
    const [currentStateConfig] = states
    const { unknownIntentAction } = currentStateConfig

    const expectedResponses = ['wat?']

    const { responses, nextState } = await resolveAction({
      action: unknownIntentAction,
      availableStates: states,
      currentStateConfig,
      session
    })

    expect(responses).toStrictEqual(expectedResponses)
    expect(nextState).toBeUndefined()
  })

  it('should return the next state and the start text', async () => {
    const [currentStateConfig] = states

    const action: Action = {
      goToState: {
        name: '02'
      }
    }

    const expectedResponses = ['hi from second state']

    const { responses, nextState } = await resolveAction({
      action,
      availableStates: states,
      currentStateConfig,
      session
    })

    expect(nextState.name).toEqual('02')
    expect(responses).toStrictEqual(expectedResponses)
  })
})
