
import { getRandomResponse } from '../../src/state/getRandomResponse'

describe('state/getRandomResponse', () => {
  it('should get any response from array', async () => {
    const responses = ['hi', 'bye', 'why?']

    const response = await getRandomResponse(responses)

    expect(responses.includes(response)).toBeTruthy();
  })
})
