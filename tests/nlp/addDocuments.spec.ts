import { addDocuments } from '../../src/nlp/addDocuments'
import { IIntent } from '../../src/interfaces/IIntent'

import {
  buildNlpObject,
  FIRST_INTENT,
  SECOND_INTENT,
  FIRST_WORD,
  SECOND_WORD,
  LANGUAGE
} from './mockData'

describe('nlp/addDocuments', () => {
  it('should add documents on nlp instance', () => {
    const nlp = buildNlpObject()

    const intents: IIntent[] = [
      { name: FIRST_INTENT, training: [FIRST_WORD, SECOND_WORD] },
      { name: SECOND_INTENT, training: [FIRST_WORD, SECOND_WORD] }
    ]

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
