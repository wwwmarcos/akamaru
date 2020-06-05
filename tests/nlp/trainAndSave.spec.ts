
import { trainAndSave } from '../../src/nlp/trainAndSave'

import { buildNlpObject, intents, LANGUAGE } from '../mockData'

describe('nlp/trainAndSave', () => {
  it('should train and save the model', async () => {
    const nlp = buildNlpObject()

    await trainAndSave({
      nlp,
      language: LANGUAGE,
      intents
    })

    expect(nlp.addDocument).toBeCalledTimes(4)
    expect(nlp.train).toBeCalledTimes(1)
    expect(nlp.save).toBeCalledTimes(1)
  })
})
