import { BotDefinition } from 'interfaces/RikudoConfig'
import { getIntentAction } from './getIntentAction'
import { getState } from './getState'
import { resolveAction } from './resolveAction'
import { resolveFirstContact } from './resolveFirstContact'
import { sendResponse } from './sendResponse'
import { INlpManager } from 'interfaces/INlpManager'

const getActionResponse = async (options: {
  currentStateName,
  availableStates,
  intent,
  session
}) => {

  const { currentStateName, availableStates, session, intent } = options

  const currentStateConfig = getState(
    currentStateName,
    availableStates
  )

  const action = getIntentAction(
    currentStateConfig.actions,
    intent
  ) || currentStateConfig.unknownIntentAction

  const { responses, nextState } = await resolveAction({
    action,
    availableStates,
    currentStateConfig,
    session
  })

  if (!nextState) {
    return {
      responses: [responses],
      currentStateName
    }
  }

  const nextStateConfig = getState(
    nextState.name,
    availableStates
  )

  if (nextState.intent) {
    return getActionResponse({
      currentStateName: nextState.name,
      availableStates,
      intent: nextState.intent,
      session
    })
  }

  return {
    responses: [responses, nextStateConfig.startTexts],
    currentStateName: nextStateConfig.name
  }
}

const resolveMessage = (utils: {
  botDefinition: BotDefinition,
  nlp: INlpManager
}) =>
  async (options: {
    text: string,
    userId?: string
  }) => {

    const { userId, text } = options
    const { botDefinition, nlp } = utils
    const { states: availableStates, language, resolvers } = botDefinition
    const { getSession, saveSession } = resolvers

    const session = await getSession(userId)

    if (!session) {
      return resolveFirstContact(
        saveSession,
        userId,
        availableStates
      )
    }

    const { intent } = await nlp.process(
      language,
      text
    )

    const { responses, currentStateName } = await getActionResponse({
      currentStateName: session.currentStateName,
      availableStates,
      intent,
      session
    })

    const newSession = {
      ...session,
      currentStateName,
      stack: [
        ...session.stack,
        { userText: text }
      ]
    }

    await saveSession(userId, newSession)

    return sendResponse(responses)
  }

export { resolveMessage }
