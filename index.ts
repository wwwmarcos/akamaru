import { NlpManager } from 'node-nlp'
import { INlpManager } from './src/interfaces/INlpManager'
import { trainAndSave } from 'nlp/trainAndSave'
import { Intent } from './src/interfaces/Intent'
import { RikudoConfig } from './src/interfaces/RikudoConfig'

interface IRikudoOptions {
  language: string,
  intents: Intent[]
  bot: RikudoConfig
}

const build = async ({ language = 'pt', bot }: IRikudoOptions) => {
  const nlp: INlpManager = new NlpManager({
    languages: [language]
  })

  const { allIntents } = bot

  await trainAndSave({
    nlp,
    intents: allIntents,
    language
  })

}

export {
  build
}
