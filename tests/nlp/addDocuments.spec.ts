import { addDocuments } from '../../src/nlp/addDocuments'
import { IIntent } from '../../src/interfaces/IIntent'

describe('nlp/addDocuments', () => {
  it('should add documents on nlp instance', () => {
    const addDocument = jest.fn()
    const nlp = {
      addDocument
    }

    const language = 'pt-br'

    const FIRST_INTENT = 'sasuke'
    const SECOND_INTENT = 'naruto'

    const FIRST_WORD = 'NARUTOOOOO'
    const SECOND_WORD = 'NARUTO'

    const intents: IIntent[] = [
      { name: FIRST_INTENT, training: [FIRST_WORD, SECOND_WORD] },
      { name: SECOND_INTENT, training: [FIRST_WORD, SECOND_WORD] }
    ]

    addDocuments({
      nlp,
      intents,
      language
    })

    expect(addDocument).toBeCalledTimes(4)
    expect(addDocument).toBeCalledWith(language, FIRST_WORD, FIRST_INTENT)
    expect(addDocument).toBeCalledWith(language, SECOND_WORD, FIRST_INTENT)
    expect(addDocument).toBeCalledWith(language, FIRST_WORD, SECOND_INTENT)
    expect(addDocument).toBeCalledWith(language, SECOND_WORD, SECOND_INTENT)
  })
})
