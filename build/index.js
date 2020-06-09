"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const node_nlp_1 = require("node-nlp");
const trainAndSave_1 = require("./src/nlp/trainAndSave");
const resolveMessage_1 = require("./src/state/resolveMessage");
const build = (botDefinition) => {
    const { allIntents, resolvers, language } = botDefinition;
    const nlp = new node_nlp_1.NlpManager({
        languages: [language]
    });
    return {
        trainAndSave: () => trainAndSave_1.trainAndSave({
            nlp,
            intents: allIntents,
            language
        }),
        message: resolveMessage_1.resolveMessage({
            botDefinition,
            nlp,
            ...resolvers
        })
    };
};
exports.build = build;
//# sourceMappingURL=index.js.map