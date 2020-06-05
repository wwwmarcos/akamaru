import { Intent } from '../interfaces/Intent'
import { INlpManager } from '../interfaces/INlpManager'

const addDocuments = (options: {
  nlp: INlpManager,
  intents: Intent[],
  language: string
}): void => {
  for (const intent of options.intents) {
    for (const training of intent.training) {
      options.nlp.addDocument(
        options.language,
        training,
        intent.name
      )
    }
  }
}

export { addDocuments }

