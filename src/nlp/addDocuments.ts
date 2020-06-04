import { IIntent } from '../interfaces/IIntent'

const addDocuments = (options: {
  nlp,
  intents: IIntent[],
  language
}) => {
  console.log(options)
}

export {
  addDocuments
}
