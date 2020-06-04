import { IIntent } from '../interfaces/IIntent'
import { INlpManager } from '../interfaces/INlpManager'

const addDocuments = (options: {
  nlp: INlpManager,
  intents: IIntent[],
  language: string
}) => {
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

