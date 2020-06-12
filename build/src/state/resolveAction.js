"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAction = void 0;
const getState_1 = require("./getState");
const resolveAction = async (options) => {
    const { action, availableStates, currentStateConfig, session } = options;
    if (action.handler) {
        const { responses, nextState } = await action.handler(session);
        return {
            responses,
            nextState
        };
    }
    if (action.responses) {
        return {
            responses: action.responses,
            nextState: action.goToState
        };
    }
    if (action.goToState) {
        const nextStateConfig = getState_1.getState(action.goToState.name, availableStates);
        return {
            ignoreStartTexts: true,
            responses: nextStateConfig.startTexts,
            nextState: action.goToState
        };
    }
    return resolveAction({
        ...options,
        action: currentStateConfig.unknownIntentAction
    });
};
exports.resolveAction = resolveAction;
//# sourceMappingURL=resolveAction.js.map