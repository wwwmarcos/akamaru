
import { getIntentAction } from '../../src/state/getIntentAction'
import { Action } from '../../src/interfaces/State'
import { FIRST_INTENT, SECOND_INTENT, FIRST_WORD, SECOND_WORD } from '../mockData'

describe('state/getIntentAction', () => {
  it('should return the correct action', async () => {
    const expectedFirstAction = { onIntent: FIRST_INTENT, responses: [FIRST_WORD] }
    const expectedSecondAction = { onIntent: SECOND_INTENT, responses: [SECOND_WORD] }

    const actions: Action[] = [
      expectedFirstAction,
      expectedSecondAction
    ]

    const firstAction = getIntentAction(actions, FIRST_INTENT)
    const secondAction = getIntentAction(actions, SECOND_INTENT)

    expect(firstAction).toStrictEqual(expectedFirstAction)
    expect(secondAction).toStrictEqual(expectedSecondAction)
  })
})
