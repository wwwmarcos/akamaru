import { UserSession } from 'interfaces/RikudoConfig'

const createSession = (userId: string): UserSession => ({
  userId,
  currentStateName: 'START',
  stack: [],
  userData: {}
})

export {
  createSession
}
