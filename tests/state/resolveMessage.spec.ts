
import { resolveMessage } from '../../src/state/resolveMessage'
import { botDefinition, buildNlpObject } from '../mockData'
import { createSession } from '../../src/state/createSession'

describe('state/resolveMessage', () => {
  const nlp = buildNlpObject()

  const resolvers = {
    getSession: jest.fn(),
    saveSession: jest.fn()
  }

  const definition = {
    ...botDefinition,
    resolvers
  }

  const bot = resolveMessage({
    botDefinition: definition,
    nlp
  })

  it('should use getSession and saveSession on first contact', async () => {
    const userId = 'some-id'

    await bot({
      text: 'hi',
      userId
    })

    const expectedSession = createSession(userId)

    expect(resolvers.getSession).toBeCalledTimes(1)
    expect(resolvers.getSession).toBeCalledWith(userId)
    expect(resolvers.saveSession).toBeCalledTimes(1)
    expect(resolvers.saveSession).toBeCalledWith(userId, expectedSession)
  })

  it('should return the start text on first contact', async () => {
    const userId = 'some-id-id'

    const [startState] = botDefinition.states
    const { startTexts } = startState

    const { response } = await bot({
      text: 'hi',
      userId
    })

    expect(startTexts.includes(response)).toBeTruthy()
  })

  it('should return the start text on first contact', async () => {
    const userId = 'some-id-id-id'

    const [startState] = botDefinition.states
    const { startTexts } = startState

    const { response } = await bot({
      text: 'hi',
      userId
    })

    expect(startTexts.includes(response)).toBeTruthy()
  })
})
