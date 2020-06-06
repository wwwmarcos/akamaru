import { createSession } from './createSession'
import { getState } from './getState'
import { sendResponse } from './sendResponse'
import { State } from 'interfaces/State'

const resolveFirstContact = async (
  saveSession,
  userId: string,
  availableStates: State[]
) => {
  const newSession = createSession(userId)

  await saveSession(userId, newSession)

  const startState = getState(
    newSession.currentStateName,
    availableStates
  )

  return sendResponse(startState.startTexts)
}

export {
  resolveFirstContact
}
