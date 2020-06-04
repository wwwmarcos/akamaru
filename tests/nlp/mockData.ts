const buildNlpObject = () => ({
  addDocument: jest.fn()
})

const LANGUAGE = 'pt-br'
const FIRST_INTENT = 'sasuke'
const SECOND_INTENT = 'naruto'
const FIRST_WORD = 'NARUTOOOOO'
const SECOND_WORD = 'NARUTO'

export {
  buildNlpObject,
  LANGUAGE,
  FIRST_INTENT,
  SECOND_INTENT,
  FIRST_WORD,
  SECOND_WORD
}
