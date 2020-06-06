import { Resolvers, RikudoConfig } from '../interfaces/RikudoConfig'
import { getIntentAction } from './getIntentAction'
import { getState } from './getState'
import { resolveAction } from './resolveAction'
import { resolveFirstContact } from './resolveFirstContact'
import { sendResponse } from './sendResponse'
import { INlpManager } from '../interfaces/INlpManager'

const resolveMessage = (utils: {
  saveSession: Resolvers['saveSession'],
  getSession: Resolvers['getSession'],
  botDefinition: RikudoConfig,
  nlp: INlpManager
}) =>
  async (options: {
    text: string,
    userId?: string
  }) => {

    const { userId, text } = options
    const { getSession, saveSession, bot, nlp } = utils
    const { states: availableStates, language } = bot

    const session = await getSession(userId)

    if (!session) {
      return resolveFirstContact(
        saveSession,
        userId,
        availableStates
      )
    }

    const currentStateConfig = getState(
      session.currentStateName,
      availableStates
    )

    const { intent } = await nlp.process(
      language,
      text
    )

    const action = getIntentAction(
      currentStateConfig.actions,
      intent
    ) || currentStateConfig.unknownIntentAction

    const { responses, nextState } = resolveAction({
      action,
      availableStates,
      currentStateConfig
    })

    if (nextState) {
      const newSession = {
        ...session,
        currentStateName: nextState
      }

      await saveSession(userId, newSession)
    }

    return sendResponse(responses)
  }

export { resolveMessage }
