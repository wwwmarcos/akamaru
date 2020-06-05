interface INlpManager {
  train: () => Promise<void>
  save: () => Promise<void>
  addDocument: (
    language: string,
    training: string,
    intent: string
  ) => Promise<void>
  process: (
    language: string,
    utterance: string
  ) => Promise<{
    intent: string
  }>
}

export {
  INlpManager
}
