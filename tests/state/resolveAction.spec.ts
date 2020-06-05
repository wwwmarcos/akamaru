
import { resolveAction } from '../../src/state/resolveAction'
import { states } from '../mockData'
import { Action } from '../../src/interfaces/State'

describe('state/resolveAction', () => {
  it('should return the responses from action', async () => {
    const [currentStateConfig] = states
    const { unknownIntentAction } = currentStateConfig

    const expectedResponses = ['wat?']

    const { responses, nextState } = await resolveAction({
      action: unknownIntentAction,
      availableStates: states,
      currentStateConfig
    })

    expect(responses).toStrictEqual(expectedResponses)
    expect(nextState).toBeUndefined()
  })

  it('should return the next state and the start text', async () => {
    const [currentStateConfig] = states

    const action: Action = {
      goToState: '02'
    }

    const expectedResponses = ['hi from second state']

    const { responses, nextState } = await resolveAction({
      action,
      availableStates: states,
      currentStateConfig
    })

    expect(nextState).toEqual('02')
    expect(responses).toStrictEqual(expectedResponses)
  })
})
