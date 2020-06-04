import { IIntent } from '../interfaces/IIntent'
import { addDocuments } from './addDocuments'

const trainAndSave = async (options: {
  nlp,
  intents: IIntent[],
  language
}) => {

  addDocuments(options)

  const { nlp } = options

  await nlp.train()

  nlp.save()

  return {
    nlp
  }
}

export {
  trainAndSave
}
