interface INlpManager {
  train: () => Promise<void>
  save: () => Promise<void>
  addDocument: (
    language: string,
    training: string,
    intent: string,
  ) => Promise<void>
}

export {
  INlpManager
}
