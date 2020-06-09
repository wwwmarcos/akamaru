"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveFirstContact = void 0;
const createSession_1 = require("./createSession");
const getState_1 = require("./getState");
const sendResponse_1 = require("./sendResponse");
const resolveFirstContact = async (saveSession, userId, availableStates) => {
    const newSession = createSession_1.createSession(userId);
    await saveSession(userId, newSession);
    const startState = getState_1.getState(newSession.currentStateName, availableStates);
    return sendResponse_1.sendResponse([startState.startTexts]);
};
exports.resolveFirstContact = resolveFirstContact;
//# sourceMappingURL=resolveFirstContact.js.map