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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Message Schema
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
// Connect to MongoDB
mongoose_1.default.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:dG7UPyfjurPaRUxB@ragim.l0t1l.mongodb.net/journaldb?retryWrites=true&w=majority&appName=ragim')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
// API endpoint to save message
app.post('/api/messages', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = new Message(req.body);
        yield message.save();
        res.status(201).json(message);
    }
    catch (error) {
        res.status(500).json({ error: 'Error saving message' });
    }
}));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
