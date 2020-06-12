"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveMessage = void 0;
const getIntentAction_1 = require("./getIntentAction");
const getState_1 = require("./getState");
const resolveAction_1 = require("./resolveAction");
const resolveFirstContact_1 = require("./resolveFirstContact");
const sendResponse_1 = require("./sendResponse");
const getActionResponse = async (options) => {
    const { currentStateName, availableStates, session, intent } = options;
    const currentStateConfig = getState_1.getState(currentStateName, availableStates);
    const action = getIntentAction_1.getIntentAction(currentStateConfig.actions, intent) || currentStateConfig.unknownIntentAction;
    const { responses, nextState, ignoreStartTexts } = await resolveAction_1.resolveAction({
        action,
        availableStates,
        currentStateConfig,
        session
    });
    if (!nextState) {
        return {
            responses: [responses],
            currentStateName
        };
    }
    const nextStateConfig = getState_1.getState(nextState.name, availableStates);
    if (nextState.intent) {
        return getActionResponse({
            currentStateName: nextState.name,
            availableStates,
            intent: nextState.intent,
            session
        });
    }
    if (ignoreStartTexts) {
        return {
            responses: [responses],
            currentStateName: nextStateConfig.name
        };
    }
    return {
        responses: [responses, nextStateConfig.startTexts],
        currentStateName: nextStateConfig.name
    };
};
const resolveMessage = (utils) => async (options) => {
    const { userId, text } = options;
    const { botDefinition, nlp } = utils;
    const { states: availableStates, language, resolvers } = botDefinition;
    const { getSession, saveSession } = resolvers;
    const session = await getSession(userId);
    if (!session) {
        return resolveFirstContact_1.resolveFirstContact(saveSession, userId, availableStates);
    }
    const { intent } = await nlp.process(language, text);
    const { responses, currentStateName } = await getActionResponse({
        currentStateName: session.currentStateName,
        availableStates,
        intent,
        session
    });
    const newSession = {
        ...session,
        currentStateName,
        stack: [
            ...session.stack,
            {
                userText: text,
                botResponse: responses
            }
        ]
    };
    await saveSession(userId, newSession);
    return sendResponse_1.sendResponse(responses);
};
exports.resolveMessage = resolveMessage;
//# sourceMappingURL=resolveMessage.js.map