import { NlpManager } from 'node-nlp'
import { INlpManager } from './src/interfaces/INlpManager'
import { BotDefinition } from './src/interfaces/RikudoConfig'
import { trainAndSave } from './src/nlp/trainAndSave'
import { resolveMessage } from './src/state/resolveMessage'

const build = async (botDefinition: BotDefinition) => {

  const { allIntents, resolvers, language } = botDefinition

  const nlp: INlpManager = new NlpManager({
    languages: [language]
  })

  await trainAndSave({
    nlp,
    intents: allIntents,
    language
  })

  return {
    message: resolveMessage({
      botDefinition,
      nlp,
      ...resolvers
    })
  }
}

export { build, BotDefinition }
