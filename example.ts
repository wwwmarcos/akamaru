import { build, BotDefinition } from './index'

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
      text: 'hi',
      userId: 'sample-id'
    }),
    await app.message({
      text: 'I want a cake',
      userId: 'sample-id'
    }),
    await app.message({
      text: 'some random text',
      userId: 'sample-id'
    })
  ]

  /**
   * [
   *   { response: 'hi, how i can help you' },
   *   { response: 'nice, I have cakes' },
   *   { response: 'i didn\'t understand' }
   * ]
   */
  console.log(await Promise.all(responses))
}

start()
