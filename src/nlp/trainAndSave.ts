import { IIntent } from '../interfaces/IIntent'
import { addDocuments } from './addDocuments'
import { INlpManager } from 'interfaces/INlpManager'

const trainAndSave = async (options: {
  nlp: INlpManager,
  intents: IIntent[],
  language: string
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
