"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const messageSchema = new mongoose_1.default.Schema({
    role: String,
    timestamp: String,
    content: String,
    scores: [{
            emotion: String,
            score: String
        }],
    createdAt: { type: Date, default: Date.now }
});
const Message = mongoose_1.default.model('Message', messageSchema);
exports.default = Message;
