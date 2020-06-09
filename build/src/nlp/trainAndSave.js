"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trainAndSave = void 0;
const addDocuments_1 = require("./addDocuments");
const trainAndSave = async (options) => {
    addDocuments_1.addDocuments(options);
    const { nlp } = options;
    await nlp.train();
    nlp.save();
    return {
        nlp
    };
};
exports.trainAndSave = trainAndSave;
//# sourceMappingURL=trainAndSave.js.map