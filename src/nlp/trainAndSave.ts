import { Intent } from 'interfaces/Intent'
import { addDocuments } from './addDocuments'
import { INlpManager } from '../interfaces/INlpManager'

const trainAndSave = async (options: {
  nlp: INlpManager,
  intents: Intent[],
  language: string
}): Promise<{ nlp: INlpManager }> => {

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
