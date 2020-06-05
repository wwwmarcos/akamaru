
import { getState } from '../../src/state/getState'
import { states } from '../mockData'

describe('state/getState', () => {
  it('should return the correct state', async () => {

    const [firstState, secondState] = states

    expect(getState('01', states)).toStrictEqual(firstState)
    expect(getState('02', states)).toStrictEqual(secondState)
  })
})
