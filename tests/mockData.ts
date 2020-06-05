import { Intent } from '../src/interfaces/Intent'
import { INlpManager } from 'interfaces/INlpManager'
import { State } from '../src/interfaces/State'

const buildNlpObject = (): INlpManager => ({
  addDocument: jest.fn(),
  train: jest.fn(),
  process: jest.fn(),
  save: jest.fn()
})

const LANGUAGE = 'pt-br'
const FIRST_INTENT = 'sasuke'
const SECOND_INTENT = 'naruto'
const FIRST_WORD = 'NARUTOOOOO'
const SECOND_WORD = 'NARUTO'

const intents: Intent[] = [
  { name: FIRST_INTENT, training: [FIRST_WORD, SECOND_WORD] },
  { name: SECOND_INTENT, training: [FIRST_WORD, SECOND_WORD] }
]

const firstState = {
  name: '01',
  startTexts: ['hi'],
  unknownIntentAction: {
    responses: ['wat?']
  },
  actions: []
}

const secondState = {
  ...firstState,
  startTexts: ['hi from second state'],
  name: '02'
}

const states: State[] = [
  firstState,
  secondState
]

export {
  buildNlpObject,
  LANGUAGE,
  FIRST_INTENT,
  SECOND_INTENT,
  FIRST_WORD,
  SECOND_WORD,
  intents,
  states
}
