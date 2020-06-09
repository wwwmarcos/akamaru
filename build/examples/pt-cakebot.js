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
const callAHumanAction = {
    onIntent: 'GERENTE',
    handler: () => {
        return {
            responses: ['Perai, vou chamar o brabo']
        };
    }
};
const startActions = [
    callAHumanAction,
    { onIntent: 'DOAR-GENERICO', goToState: { name: 'DOACAO' } },
    { onIntent: 'DOAR-DINHEIRO', goToState: { name: 'DOACAO', intent: 'DOAR-DINHEIRO' } },
    { onIntent: 'DOAR-LIVRO', goToState: { name: 'DOACAO', intent: 'DOAR-LIVRO' } }
];
const botDefinition = {
    allIntents: [
        {
            name: 'GERENTE',
            training: [
                'falar com o gerente',
                'falar com humano',
                'chama uma pessoa',
                'preciso de ajuda'
            ]
        },
        {
            name: 'DOAR-DINHEIRO',
            training: [
                'me passa o picpay',
                'vocês tem pic pay?',
                'me manda o qrcode',
                'link da benfeitoria',
                'como faço para doar dinheiro',
            ]
        },
        {
            name: 'DOAR-LIVRO',
            training: [
                'quero doar livros',
                'tenho livros para doar',
                'onde envio os livros?',
                'pode buscar meus livros',
            ]
        },
        {
            name: 'DOAR-GENERICO',
            training: [
                'quero fazer uma doação',
                'quero ajudar',
                'ajudar o movimento',
                'quero ser voluntario',
                'como faz para fazer doação'
            ]
        },
        {
            name: 'NAO',
            training: [
                'não obrigado',
                'nops',
                'não valeu',
                'não preciso não',
                'só isso mesmo',
                'por enquanto é isso',
                'até mais',
            ]
        }
    ],
    language: 'pt',
    states: [
        {
            name: 'START',
            startTexts: ['Oi, como posso te ajudar?'],
            actions: startActions,
            unknownIntentAction: {
                responses: ['Não te entendi. Você quer fazer uma doação ou falar com um humano?']
            }
        },
        {
            name: 'DOACAO',
            startTexts: ['Ok, você quer doar livros ou ajudar com dinheiros?'],
            actions: [
                callAHumanAction,
                { onIntent: 'DOAR-LIVRO', responses: ['Ok, toma esse link'], goToState: { name: 'FINALIZA' } },
                { onIntent: 'DOAR-DINHEIRO', responses: ['Temos picpay etc'], goToState: { name: 'FINALIZA' } }
            ],
            unknownIntentAction: {
                responses: ['Não te entendi. Que tipo de doação você quer fazer?']
            }
        },
        {
            name: 'FINALIZA',
            startTexts: ['Posso te ajudar com mais alguma coisa?'],
            actions: [
                ...startActions,
                { onIntent: 'NAO', responses: ['Beleza, então. Obrigado e até mais'] }
            ],
            unknownIntentAction: {
                responses: ['Não te entendi. Você ainda precisa de ajuda?']
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
    const userId = 'sample-id';
    const responses = [
        await app.message({
            text: 'oi',
            userId
        }),
        await app.message({
            text: 'quero doar um livro',
            userId
        }),
        await app.message({
            text: 'quero doar dinheiro',
            userId
        }),
        await app.message({
            text: 'falar com humano',
            userId
        })
    ];
    console.log(await Promise.all(responses));
};
start();
//# sourceMappingURL=pt-cakebot.js.map