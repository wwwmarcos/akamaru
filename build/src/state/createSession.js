"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSession = void 0;
const createSession = (userId) => ({
    userId,
    currentStateName: 'START',
    stack: [],
    userData: {}
});
exports.createSession = createSession;
//# sourceMappingURL=createSession.js.map