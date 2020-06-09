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
            name: 'CAKE',
            training: ['cake', 'I want a cake']
        }
    ],
    language: 'en',
    states: [
        {
            name: 'START',
            startTexts: ['watch you want to?', 'hi, how i can help you'],
            actions: [{
                    onIntent: 'CAKE',
                    responses: ['nice, I have cakes']
                }],
            unknownIntentAction: {
                responses: [`i didn't understand`]
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
            text: 'hi',
            userId: 'sample-id'
        }),
        await app.message({
            text: 'I want a cake',
            userId: 'sample-id'
        }),
        await app.message({
            text: 'some random text',
            userId: 'sample-id'
        })
    ];
    console.log(await Promise.all(responses));
};
start();
//# sourceMappingURL=en-cakebot.js.map