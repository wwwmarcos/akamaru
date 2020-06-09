"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIntentAction = void 0;
const getIntentAction = (actions, intent) => actions.find(config => config.onIntent === intent);
exports.getIntentAction = getIntentAction;
//# sourceMappingURL=getIntentAction.js.map