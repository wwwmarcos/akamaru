<p alt="Logo" align="center">
  <img src="./logo.png" />
</p>

chatbot framework

# Install
`npm add akamaru` or `yarn add akamaru`

# Usage
```javascript
const akamaru = require('akamaru')

const botDefinition = {
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
    getSession,
    saveSession
  }
}

const bot = akamaru.build(botDefinition)

bot.trainAndSave()

const { response } = await bot.message({
  userId: 'oi',
  text: text
})
```

  
