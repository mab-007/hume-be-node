"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ping_route_1 = __importDefault(require("./routes/ping.route"));
const mongoose_1 = __importDefault(require("mongoose"));
const message_route_1 = __importDefault(require("./routes/message.route"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Connect to MongoDB
mongoose_1.default.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:dG7UPyfjurPaRUxB@ragim.l0t1l.mongodb.net/journaldb?retryWrites=true&w=majority&appName=ragim')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
app.use((0, cors_1.default)()); // Enable CORS for all routes
app.use(express_1.default.json()); // Parse JSON request bodies
app.get('/', (req, res) => {
    res.send('Hello, TypeScript Backend!');
});
app.post('/example', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    res.json({ message: 'Data received successfully', receivedData: data });
});
// Mount the routers
app.use('/', ping_route_1.default.router); // Mount the PingRouter at the root
app.use('/', message_route_1.default.router); // Mount the PingRouter at the root
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
