import { Intent } from '../src/interfaces/Intent'
import { INlpManager } from 'interfaces/INlpManager'

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

export {
  buildNlpObject,
  LANGUAGE,
  FIRST_INTENT,
  SECOND_INTENT,
  FIRST_WORD,
  SECOND_WORD,
  intents
}
