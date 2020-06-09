"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const sessions = new Map();
const saveSession = (userId, session) => {
    sessions.set(userId, session);
};
const getSession = (userId) => {
    return sessions.get(userId);
};
const botDefinition = {
    allIntents: [
        {
            name: 'BOLO',
            training: ['bolo', 'quero um bolo', 'tem bolo ai?']
        }
    ],
    language: 'pt',
    states: [
        {
            name: 'START',
            startTexts: ['Oi, como posso te ajudar?'],
            actions: [{
                    onIntent: 'BOLO',
                    responses: ['Ok, tenho bolos aqui, qual vc quer?']
                }],
            unknownIntentAction: {
                responses: ['Não te entendi, como posso ajudar?']
            }
        }
    ],
    resolvers: {
        getSession,
        saveSession
    }
};
const start = async () => {
    const app = await index_1.build(botDefinition);
    const responses = [
        await app.message({
            text: 'oi',
            userId: 'sample-id'
        }),
        await app.message({
            text: 'quero um bolo',
            userId: 'sample-id'
        }),
        await app.message({
            text: 'patos não voam',
            userId: 'sample-id'
        })
    ];
    console.log(await Promise.all(responses));
};
start();
//# sourceMappingURL=pt-cakebot.js.map