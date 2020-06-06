import { NlpManager } from 'node-nlp'
import { INlpManager } from './src/interfaces/INlpManager'
import { Intent } from './src/interfaces/Intent'
import { Resolvers, RikudoConfig } from './src/interfaces/RikudoConfig'
import { trainAndSave } from './src/nlp/trainAndSave'
import { resolveMessage } from './src/state/resolveMessage'

type IRikudoOptions = {
  language: string
  intents: Intent[]
  botDefinition: RikudoConfig,
  resolvers: Resolvers
}

const build = async ({
  language = 'pt',
  botDefinition,
  resolvers
}: IRikudoOptions) => {
  const nlp: INlpManager = new NlpManager({
    languages: [language]
  })

  const { allIntents } = botDefinition

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

export { build }

