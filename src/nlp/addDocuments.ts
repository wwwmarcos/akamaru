import { IIntent } from '../interfaces/IIntent'

const addDocuments = (options: {
  nlp,
  intents: IIntent[],
  language
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

export {
  addDocuments
}
