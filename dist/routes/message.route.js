"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_router_1 = require("./base.router");
const message_entity_1 = __importDefault(require("../entity/message.entity"));
class MessageRoute extends base_router_1.BaseRouter {
    constructor() {
        super(); // Call the constructor of the BaseRouter class
    }
    routes() {
        this.router.get('/api/messages', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const message = new message_entity_1.default(req.body);
                yield message.save();
                res.status(201).json(message);
            }
            catch (error) {
                res.status(500).json({ error: 'Error saving message' });
            }
        }));
    }
}
exports.default = new MessageRoute();
