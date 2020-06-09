"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const getRandomResponse_1 = require("./getRandomResponse");
const sendResponse = (responses) => ({
    response: responses.map(response => getRandomResponse_1.getRandomResponse(response))
});
exports.sendResponse = sendResponse;
//# sourceMappingURL=sendResponse.js.map