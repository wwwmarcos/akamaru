import { INlpManager } from '../src/interfaces/INlpManager'
import { Intent } from '../src/interfaces/Intent'
import { BotDefinition } from '../src/interfaces/RikudoConfig'
import { State } from '../src/interfaces/State'

const buildNlpObject = (): INlpManager => ({
  addDocument: jest.fn(),
  train: jest.fn(),
  process: jest.fn(),
  load: jest.fn(),
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

const botDefinition: BotDefinition = {
  allIntents: [
    {
      name: 'CAKE',
      training: ['cake', 'I want a cake']
    }
  ],
  language: 'en',
  states: [
    {
      name: 'START',
      startTexts: ['watch you want to?', 'hi, how i can help you'],
      actions: [{
        onIntent: 'CAKE',
        responses: ['nice, I have cakes']
      }],
      unknownIntentAction: {
        responses: [`i didn't understand`]
      }
    }
  ],
  resolvers: {
    getSession: jest.fn(),
    saveSession: jest.fn()
  }
}

export {
  buildNlpObject,
  LANGUAGE,
  FIRST_INTENT,
  SECOND_INTENT,
  FIRST_WORD,
  SECOND_WORD,
  intents,
  states,
  botDefinition
}
