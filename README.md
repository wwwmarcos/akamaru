<p alt="Logo" align="center">
  <img src="./logo.png" />
</p>

chatbot framework

# Bot Definition example

```javascript
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
```

  
