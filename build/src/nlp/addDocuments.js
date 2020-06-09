"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDocuments = void 0;
const addDocuments = (options) => {
    for (const intent of options.intents) {
        for (const training of intent.training) {
            options.nlp.addDocument(options.language, training, intent.name);
        }
    }
};
exports.addDocuments = addDocuments;
//# sourceMappingURL=addDocuments.js.map