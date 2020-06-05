import { addDocuments } from '../../src/nlp/addDocuments'

import {
  buildNlpObject,
  FIRST_INTENT,
  SECOND_INTENT,
  FIRST_WORD,
  SECOND_WORD,
  LANGUAGE,
  intents
} from '../mockData'

describe('nlp/addDocuments', () => {
  it('should add documents on nlp instance', () => {
    const nlp = buildNlpObject()

    addDocuments({
      nlp,
      intents,
      language: LANGUAGE
    })

    expect(nlp.addDocument).toBeCalledTimes(4)
    expect(nlp.addDocument).toBeCalledWith(LANGUAGE, FIRST_WORD, FIRST_INTENT)
    expect(nlp.addDocument).toBeCalledWith(LANGUAGE, SECOND_WORD, FIRST_INTENT)
    expect(nlp.addDocument).toBeCalledWith(LANGUAGE, FIRST_WORD, SECOND_INTENT)
    expect(nlp.addDocument).toBeCalledWith(LANGUAGE, SECOND_WORD, SECOND_INTENT)
  })
})
