import { NlpManager } from 'node-nlp'
import { INlpManager } from './src/interfaces/INlpManager'
import { BotDefinition } from './src/interfaces/RikudoConfig'
import { trainAndSave } from './src/nlp/trainAndSave'
import { resolveMessage } from './src/state/resolveMessage'

const build = (botDefinition: BotDefinition) => {

  const { allIntents, resolvers, language } = botDefinition

  const nlp: INlpManager = new NlpManager({
    languages: [language]
  })

  return {
    trainAndSave: () => trainAndSave({
      nlp,
      intents: allIntents,
      language
    }),
    load: (fileName?: string) => nlp.load(fileName),
    message: resolveMessage({
      botDefinition,
      nlp,
      ...resolvers
    })
  }
}

export { build, BotDefinition }
