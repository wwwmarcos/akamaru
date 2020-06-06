<p alt="Logo" align="center">
  <img src="./logo.png" />
</p>

chatbot framework

# Bot Definition example

```javascript
import { build, BotDefinition } from './index'

const sessions = {}

const saveSession = (userId, session) => {
  sessions[userId] = session
}

const getSession = (userId) => {
  return sessions[userId]
}

const allBotIntents = [{
  name: 'GREETINGS',
  training: ['hi', 'sup', 'hello']
}]

const startState = {
  name: 'START',
  startTexts: ['hi', 'welcome'],
  actions: [{
    onIntent: 'GREETINGS',
    responses: ['hi, how i can help you?']
  }],
  unknownIntentAction: {
    responses: ['wtf?']
  }
}

const botDefinition: BotDefinition = {
  allIntents: allBotIntents,
  language: 'pt',
  states: [
    startState
  ],
  resolvers: {
    getSession,
    saveSession
  }
}

const start = async () => {
  const app = await build(botDefinition)

  const response = await app.message({
    text: 'hi',
    userId: 'aidy'
  })

  console.log(response) // hi
}

start()

```