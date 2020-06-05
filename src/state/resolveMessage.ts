import { Resolvers } from '../interfaces/RikudoConfig'
import { getIntentAction } from './getIntentAction'
import { getState } from './getState'
import { resolveAction } from './resolveAction'
import { resolveFirstContact } from './resolveFirstContact'
import { sendResponse } from './sendResponse'

const resolveMessage = ({
  saveSession,
  getSession,
  bot,
  nlp
}: Resolvers) =>
  async (options: {
    text: string,
    userId?: string
  }) => {

    const { userId =, text } = options
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
