import { build, BotDefinition } from '../index'

const sessions = new Map()

const saveSession = (userId, session) => {
  sessions.set(userId, session)
}

const getSession = (userId) => {
  return sessions.get(userId)
}

const botDefinition: BotDefinition = {
  allIntents: [
    {
      name: 'BOLO',
      training: ['bolo', 'quero um bolo', 'tem bolo ai?']
    }
  ],
  language: 'pt',
  states: [
    {
      name: 'START',
      startTexts: ['Oi, como posso te ajudar?'],
      actions: [{
        onIntent: 'BOLO',
        responses: ['Ok, tenho bolos aqui, qual vc quer?']
      }],
      unknownIntentAction: {
        responses: ['Não te entendi, como posso ajudar?']
      }
    }
  ],
  resolvers: {
    getSession,
    saveSession
  }
}

const start = async () => {
  const app = await build(botDefinition)

  const responses = [
    await app.message({
      text: 'oi',
      userId: 'sample-id'
    }),
    await app.message({
      text: 'quero um bolo',
      userId: 'sample-id'
    }),
    await app.message({
      text: 'patos não voam',
      userId: 'sample-id'
    })
  ]

  /**
   * [
   *   { response: 'Oi, Como posso te ajudar?' },
   *   { response: 'Ok, tenho bolos aqui, qual vc quer?' },
   *   { response: 'Não te entendi, como posso ajudar?' }
   * ]
   */
  console.log(await Promise.all(responses))
}

start()
